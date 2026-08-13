import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Se for publicar no GitHub Pages em https://SEU_USUARIO.github.io/NOME_DO_REPO/,
// troque a linha "base" abaixo para "/NOME_DO_REPO/". Se for usar Vercel/Netlify
// ou domínio próprio, deixe "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
