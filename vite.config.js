import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will make the server accessible from other devices on your network
    port: 5173, // Default Vite port
  },
})

