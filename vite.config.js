import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// En desarrollo, /api/*.php lo atiende PHP aparte (`npm run api`); en el hosting, Apache lo ejecuta directo.
const api = { '/api': process.env.PHP_URL ?? 'http://127.0.0.1:8090' }

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { proxy: api },
  preview: { proxy: api },
})
