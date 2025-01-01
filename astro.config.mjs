import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'never', // Prevent CSS inlining issues
    assets: '_assets', // Consistent asset directory
  },
  vite: {
    build: {
      cssCodeSplit: true, // Enable CSS code splitting
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]', // Consistent asset naming
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: 'entries/[name].[hash].js',
        },
      },
    },
    css: {
      devSourcemap: true, // Enable sourcemaps for debugging
    },
  },
});