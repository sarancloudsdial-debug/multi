import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/multi/", // <-- for GitHub Pages
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
