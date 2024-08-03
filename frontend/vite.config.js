import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  console.log(`Current mode: ${mode}`); // Muestra el modo actual en la consola
  if (mode === 'development') {
    return {
      server: {
        proxy: {
          '/api': {
            target: 'https://hotel-oceano.onrender.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            secure: false,
          }
        }
      },
      plugins: [react()],
    };
  } else if (mode === 'production') {
    return {
<<<<<<< HEAD
      // base: '/hotel-oceano.vercel.app/',
=======
      base: '/hotel-oceano.vercel.app/',
>>>>>>> 4466bfc15714c95b1d3b0c86d95397703c96a233
      plugins: [react()],
      build: {
        outDir: 'dist',
      },
    };
  }
});
