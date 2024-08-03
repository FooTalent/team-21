import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {

  // Cargar las variables de entorno
  const env = loadEnv(mode, process.cwd(), '');
  const apiURL = env.VITE_API_URL;
  console.log(env);
  console.log(apiURL);
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
<<<<<<< HEAD
    base: mode === 'production' ?  'https://hotel-oceano.onrender.com' : '/',
=======
    base: mode === 'production' ?  apiURL : '/',
>>>>>>> 837aedf096f8f17d4ef77c92cf78391bd6256272
    build: {
      outDir: 'dist',
    },
  };
});
