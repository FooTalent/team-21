import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseURL = process.env.VITE_BASE_URL;
  return {
    plugins: [react()],
    base: baseURL,
  };
});
