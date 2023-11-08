import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  root: resolve(__dirname, 'src'),

  plugins: [
    handlebars({
      partialDirectory: [resolve(__dirname, 'src/components'), resolve(__dirname, 'src/layouts')],
    })
  ],

  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "index": resolve(__dirname, 'src/index.html'),
        "login": resolve(__dirname, 'src/pages/login/login.html'),
        "create-account": resolve(__dirname, 'src/pages/create-account/create-account.html'),
        "profile": resolve(__dirname, 'src/pages/profile/profile.html'),
        "404": resolve(__dirname, 'src/pages/404.html'),
        "500": resolve(__dirname, 'src/pages/500.html')
      }
    }
  },

  server: {
    port: 3000
  },

  preview: {
    port: 3000
  }
};
