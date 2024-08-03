import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
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
      base: '/team-night-hotel/',
      plugins: [react()],
      build: {
        outDir: 'dist',
      },
    };
  }
});