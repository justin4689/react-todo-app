import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactPages from 'vite-plugin-react-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-todo-app/', // Remplacez par le nom de votre repository
  plugins: [
    react(),
    reactPages()
  ],
})
