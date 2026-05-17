import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Read from jsconfig.json
const aliasConfig = {
  '@': './src'
}

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  resolve: {
    alias: aliasConfig,
  },
  plugins: [
    react(),
  ]
})
