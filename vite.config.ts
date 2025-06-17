import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


const copyCNAME = () => {
  return {
    name: "copy-cname",
    closeBundle() {
      const cnamePath = path.resolve(__dirname, "CNAME");
      const distPath = path.resolve(__dirname, "dist/CNAME");
      if (fs.existsSync(cnamePath)) {
        fs.copyFileSync(cnamePath, distPath);
        console.log("✅ Copied CNAME to dist/");
      }
    },
  };
};


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
