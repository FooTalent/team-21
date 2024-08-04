import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

<<<<<<< HEAD
export default defineConfig(({ mode }) => {
  // Cargar las variables de entorno
  const env = loadEnv(mode, process.cwd());
  const apiURL = env.VITE_API_URL;

  return {
    server: {
      proxy: {
        '/api': {
          target: apiURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          // Añade este campo para permitir el manejo de cookies
          cookieDomainRewrite: {
            "*": "", // Opcional: Configura el dominio de las cookies si es necesario
          },
        },
      },
    },
    plugins: [react()],
    base: mode === 'production' ? apiURL : '/',
    build: {
      outDir: 'dist',
    },
  };
});
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'/team-night-hotel/',
})
>>>>>>> 5bd8d7096be559e8506927c1ab059424706dab29
