import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // lets the dev server be shared through a Cloudflare quick tunnel
    allowedHosts: ['.trycloudflare.com'],
  },
})
