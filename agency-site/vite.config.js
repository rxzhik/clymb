import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// Tailwind v4 runs via the official Vite plugin (no PostCSS needed)
export default defineConfig({
    plugins: [react(), tailwind()],
    server: { port: 5173 }
})
