import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
<<<<<<< HEAD
import { fileURLToPath } from 'url'

// Reconstruct __dirname since it's not available in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
=======
import { fileURLToPath } from 'url';


// Reconstruct __dirname since it's not available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
>>>>>>> fb06b8fcbea303306f935ed731d9d08bfc0fb9af
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@components": path.resolve(__dirname , './src/components'),
<<<<<<< HEAD
    },
  },
  define: {
    __API_URL__: JSON.stringify("http://localhost:4000"), // 👈 inject your backend URL
  },
=======
      // "@constants": path.resolve(__dirname , './src/constants'),
      // "@forms": path.resolve(__dirname, './src/forms'),
      // "@hooks": path.resolve(__dirname, './src/hooks'),
      // "@pages": path.resolve(__dirname, './src/pages'),
      // "@routers": path.resolve(__dirname , './src/routers'),
      // "@schemas": path.resolve(__dirname , '/src/schemas'),
      // "@services": path.resolve(__dirname, './src/services'),
      // "@store": path.resolve(__dirname , './src/store'),
      // "@UI" : path.resolve(__dirname , "./src/UI"),
      // "@utils": path.resolve(__dirname, './src/utils'),      
    },
  },
>>>>>>> fb06b8fcbea303306f935ed731d9d08bfc0fb9af
})
