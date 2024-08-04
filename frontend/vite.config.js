import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


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
