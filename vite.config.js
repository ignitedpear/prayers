import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` must match the GitHub Pages project-site path (https://<user>.github.io/prayers/)
// so built asset URLs resolve correctly. Only applied for production builds —
// `npm run dev` still serves from the root.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/prayers/' : '/',
}))
