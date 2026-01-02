import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-engineer/',
  build: {
    rollupOptions: {
      // Сообщаем сборщику, что эти модули внешние и их не надо искать в проекте
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'lucide-react',
        '@google/genai'
      ],
    },
  },
})
