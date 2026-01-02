import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-engineer/',
  build: {
    rollupOptions: {
      // Это предотвратит ошибки сборки из-за внешних ссылок esm.sh
      external: ['react', 'react-dom', 'lucide-react', '@google/genai'],
    },
  },
})
