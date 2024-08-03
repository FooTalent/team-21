import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       // target: 'https://hotel-ey89.onrender.com',
  //       target: 'https://hotel-oceano.onrender.com',
  //       changeOrigin: true,
  //       rewrite:(path)=> path.replace(/^\/api/,''),
  //       secure: false,
  //     }
  //   }
  // },
  plugins: [react()],
  // base:'/team-night-hotel/',
})
