import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Aumenta o limite de chunks pra Vercel não chiar
    chunkSizeWarningLimit: 1000,
    // Diretório de saída padrão, garantindo
    outDir: 'dist',
    // Minificação super agressiva
    minify: 'esbuild',
    // ...
    // assets da pasta public e src empacotados com nomes com hash para resolver cache invalidation
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  // Configs extras de performance no server
  server: {
    port: 3000,
  },
});
