import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
export default defineConfig({
   base: "/multi/",
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: [
      "myreactapp.loca.lt", // your custom subdomain
      ".loca.lt",           // allow any loca.lt subdomain
    ],
  },
});
 
 