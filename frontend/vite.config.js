import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {

  // Cargar las variables de entorno
  const env = loadEnv(mode, process.cwd(), '');
  const apiURL = env.VITE_API_URL;

  return {
    server: {
      proxy: {
        '/api': {

          target: apiURL,

          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
        }
      }
    },
    plugins: [react()],
    base: mode === 'production' ? '/team-night-hotel/' : '/',
    build: {
      outDir: 'dist',
    },
  };
});
