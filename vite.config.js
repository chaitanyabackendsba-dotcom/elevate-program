import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Two entries: the React app (index.html) and the standalone webinar
// landing page (webinar/index.html), which builds to /webinar/.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        webinar: fileURLToPath(new URL('./webinar/index.html', import.meta.url)),
      },
    },
  },
})
