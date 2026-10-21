<?php
/**
 * Buscador de dominios de Z-CORP: GET /api/dominios.php?nombre=mibotica
 *
 * Responde si cada extensión está libre u ocupada, consultando los registros oficiales:
 *  - RDAP (estándar de IANA) para .com, .net, .org, …
 *  - whois del NIC .pe para .pe y .com.pe (no tienen RDAP)
 *
 * Solo devuelve "libre" / "ocupado" / "desconocido": nunca datos del titular
 * (las condiciones del whois .pe prohíben reproducirlos). Con caché y límite de consultas por IP.
 */

declare(strict_types=1);

const EXTENSIONES = ['.com', '.pe', '.com.pe', '.net', '.org'];
const WHOIS_PE = 'kero.yachay.pe';
const BOOTSTRAP_IANA = 'https://data.iana.org/rdap/dns.json';
const CACHE_SEGUNDOS = 600;          // 10 min por consulta
const BOOTSTRAP_SEGUNDOS = 86400;    // la lista de servidores RDAP se renueva una vez al día
const LIMITE_CONSULTAS = 20;         // por IP…
const LIMITE_VENTANA = 600;          // …cada 10 minutos
const TIEMPO_ESPERA = 6;             // segundos por consulta externa

// Que ningún aviso de PHP se mezcle con el JSON (algunos hostings muestran los errores en pantalla).
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function responder(int $codigo, array $datos): never
{
    http_response_code($codigo);
    echo json_encode($datos, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/**
 * Carpeta para caché y límite de consultas. En hostings compartidos la temporal del sistema puede estar
 * restringida: se prueba también ~/tmp (la de tu cuenta cPanel). null = sin caché ni límite, pero el buscador sigue.
 */
function carpeta_temporal(): ?string
{
    static $elegida = false;
    if ($elegida !== false) {
        return $elegida;
    }
    foreach ([sys_get_temp_dir(), dirname(__DIR__, 2) . '/tmp'] as $base) {
        $dir = rtrim($base, '/') . '/zcorp-dominios';
        if ((is_dir($dir) || @mkdir($dir, 0700, true)) && is_writable($dir)) {
            return $elegida = $dir;
        }
    }
    return $elegida = null;
}

function escribir(string $nombre, string $contenido): void
{
    $dir = carpeta_temporal();
    if ($dir !== null) {
        @file_put_contents("$dir/$nombre", $contenido, LOCK_EX);
    }
}

function leer(string $nombre, ?int $segundos = null): ?string
{
    $dir = carpeta_temporal();
    $archivo = "$dir/$nombre";
    if ($dir === null || !is_file($archivo) || ($segundos !== null && filemtime($archivo) <= time() - $segundos)) {
        return null;
    }
    $contenido = @file_get_contents($archivo);
    return $contenido === false ? null : $contenido;
}

/** "https://www.Mi-Botica.com" → "mi-botica". null si no es un nombre válido. */
function limpiar_nombre(string $texto): ?string
{
    $t = strtolower(trim($texto));
    $t = preg_replace('#^https?://#', '', $t);
    $t = preg_replace('#^www\.#', '', $t);
    $t = explode('/', $t)[0];
    $t = explode('.', $t)[0];
    if (!preg_match('/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/', $t)) {
        return null;
    }
    return $t;
}

/** Límite simple por IP (archivo en la carpeta temporal). */
function controlar_limite(): void
{
    $nombre = 'limite-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'desconocida');
    $ahora = time();
    $marcas = json_decode(leer($nombre) ?? '[]', true) ?: [];
    $marcas = array_values(array_filter($marcas, fn($t) => $t > $ahora - LIMITE_VENTANA));
    if (count($marcas) >= LIMITE_CONSULTAS) {
        responder(429, ['error' => 'Hiciste muchas consultas seguidas. Espera unos minutos e inténtalo de nuevo.']);
    }
    $marcas[] = $ahora;
    escribir($nombre, json_encode($marcas));
}

function leer_cache(string $clave, int $segundos): mixed
{
    $contenido = leer('cache-' . hash('sha256', $clave), $segundos);
    return $contenido === null ? null : json_decode($contenido, true);
}

function guardar_cache(string $clave, mixed $valor): void
{
    escribir('cache-' . hash('sha256', $clave), json_encode($valor));
}

/** GET con tiempo límite. Devuelve [código HTTP, cuerpo]; código 0 si falló la conexión. */
function obtener(string $url): array
{
    // Sin la extensión curl (algunos servidores no la traen): flujos HTTP nativos de PHP.
    if (!function_exists('curl_init')) {
        $contexto = stream_context_create(['http' => [
            'timeout' => TIEMPO_ESPERA,
            'ignore_errors' => true, // para leer también los 404
            'follow_location' => 1,
            'max_redirects' => 3,
            'header' => "Accept: application/rdap+json, application/json\r\nUser-Agent: ZCORP-Buscador-Dominios/1.0\r\n",
        ]]);
        $cuerpo = @file_get_contents($url, false, $contexto);
        // La última línea de estado es la de la respuesta final (tras las redirecciones).
        $estados = preg_grep('#^HTTP/\S+ \d{3}#', $http_response_header ?? []);
        $codigo = $estados ? (int) explode(' ', end($estados))[1] : 0;
        return [$cuerpo === false ? 0 : $codigo, $cuerpo === false ? '' : $cuerpo];
    }

    $c = curl_init($url);
    curl_setopt_array($c, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS => 3,
        CURLOPT_CONNECTTIMEOUT => TIEMPO_ESPERA,
        CURLOPT_TIMEOUT => TIEMPO_ESPERA,
        CURLOPT_HTTPHEADER => ['Accept: application/rdap+json, application/json'],
        CURLOPT_USERAGENT => 'ZCORP-Buscador-Dominios/1.0',
    ]);
    $cuerpo = curl_exec($c);
    $codigo = $cuerpo === false ? 0 : (int) curl_getinfo($c, CURLINFO_HTTP_CODE);
    curl_close($c);
    return [$codigo, $cuerpo === false ? '' : $cuerpo];
}

/** Servidores RDAP oficiales por extensión (lista de IANA, en caché un día). */
function servidores_rdap(): array
{
    $mapa = leer_cache('bootstrap', BOOTSTRAP_SEGUNDOS);
    if (is_array($mapa)) {
        return $mapa;
    }
    [$codigo, $cuerpo] = obtener(BOOTSTRAP_IANA);
    $datos = $codigo === 200 ? json_decode($cuerpo, true) : null;
    $mapa = [];
    foreach ($datos['services'] ?? [] as [$tlds, $urls]) {
        foreach ($tlds as $tld) {
            $mapa[$tld] = rtrim($urls[0], '/') . '/';
        }
    }
    if ($mapa) {
        guardar_cache('bootstrap', $mapa);
    }
    return $mapa;
}

/**
 * RDAP: 200 = registrado, 404 = libre. Solo se interpreta el 404 cuando la extensión
 * tiene servidor RDAP oficial (si no, un 404 no significa nada).
 */
function consultar_rdap(string $dominio, string $tld): string
{
    $servidor = servidores_rdap()[$tld] ?? null;
    if ($servidor === null) {
        return 'desconocido';
    }
    [$codigo] = obtener($servidor . 'domain/' . rawurlencode($dominio));
    return match ($codigo) {
        200 => 'ocupado',
        404 => 'libre',
        default => 'desconocido',
    };
}

/** whois del NIC .pe (puerto 43): "No Object Found" = libre. */
function consultar_whois_pe(string $dominio): string
{
    $socket = @fsockopen(WHOIS_PE, 43, $errno, $errstr, TIEMPO_ESPERA);
    if (!$socket) {
        return 'desconocido';
    }
    stream_set_timeout($socket, TIEMPO_ESPERA);
    fwrite($socket, $dominio . "\r\n");
    $respuesta = '';
    while (!feof($socket) && strlen($respuesta) < 20000) {
        $parte = fgets($socket, 1024);
        if ($parte === false) {
            break;
        }
        $respuesta .= $parte;
    }
    fclose($socket);
    if (stripos($respuesta, 'No Object Found') !== false) {
        return 'libre';
    }
    if (stripos($respuesta, 'Domain Name:') !== false) {
        return 'ocupado';
    }
    return 'desconocido';
}

function consultar(string $nombre, string $extension): string
{
    $dominio = $nombre . $extension;
    $guardado = leer_cache('dominio:' . $dominio, CACHE_SEGUNDOS);
    if (is_string($guardado)) {
        return $guardado;
    }
    $estado = str_ends_with($extension, '.pe')
        ? consultar_whois_pe($dominio)
        : consultar_rdap($dominio, ltrim($extension, '.'));
    if ($estado !== 'desconocido') {
        guardar_cache('dominio:' . $dominio, $estado);
    }
    return $estado;
}

// ---------- Petición ----------

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    responder(405, ['error' => 'Método no permitido.']);
}

$texto = (string) ($_GET['nombre'] ?? '');
if (preg_match('/[^\x20-\x7E]/', $texto)) {
    responder(422, ['error' => 'Escribe el nombre sin tildes, ñ ni espacios.']);
}
$nombre = limpiar_nombre($texto);
if ($nombre === null) {
    responder(422, ['error' => 'Escribe un nombre válido: solo letras, números y guiones (máx. 63).']);
}

controlar_limite();

$resultados = [];
foreach (EXTENSIONES as $extension) {
    $resultados[] = ['dominio' => $nombre . $extension, 'extension' => $extension, 'estado' => consultar($nombre, $extension)];
}

responder(200, ['nombre' => $nombre, 'resultados' => $resultados]);
