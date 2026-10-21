import robot from '../assets/robot-zclau.webp'

// Mensaje que recorre la pantallita del pecho.
const MENSAJE = '¿QUÉ TAL ZCLAU?'

// Robot que flota junto al celular del hero: ojos y antena brillan y el pecho muestra un letrero digital.
// Las posiciones (%) están medidas sobre src/assets/robot-zclau.webp; si cambias la imagen, ajústalas.
export default function RobotZclau() {
  return (
    <div
      className="pointer-events-none absolute bottom-8 right-[calc(100%-1rem)] z-10 hidden w-[150px] sm:block lg:w-[180px]"
      aria-hidden
    >
      <div className="animate-robot-float relative">
        <img src={robot} alt="" className="block w-full drop-shadow-[0_18px_30px_rgba(59,227,255,0.25)]" />

        {/* Ojos y antena: brillo que pulsa */}
        <span className="robot-eye left-[28.5%]" />
        <span className="robot-eye left-[63.4%]" />
        <span className="animate-robot-glow absolute left-[47%] top-[0.6%] aspect-square w-[6.2%] rounded-full bg-[#5aa9ff] shadow-[0_0_10px_4px_#3b82f6]" />

        {/* Pantallita del pecho con letrero que recorre */}
        <div className="robot-screen absolute left-[36.5%] top-[73%] flex h-[14.7%] w-[27.8%] items-center overflow-hidden rounded-[22%] bg-[#05121c]">
          <span className="animate-robot-ticker whitespace-nowrap font-mono text-[11px] font-bold leading-none text-[#3be3ff] [text-shadow:0_0_6px_#3be3ff] lg:text-[13px]">
            {MENSAJE}
          </span>
        </div>
      </div>

      {/* Sombra en el piso: se achica cuando el robot sube */}
      <div className="animate-robot-shadow mx-auto mt-3 h-3 w-1/2 rounded-full bg-black/40 blur-md" />
    </div>
  )
}
