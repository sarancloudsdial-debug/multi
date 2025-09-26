import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
export default defineConfig({
  plugins: [react()],
  base: "/my-react-app/",   // 👈 repo name only, not full URL
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: [
      "myreactapp.loca.lt",
      ".loca.lt",
    ],
  },
});
 
 