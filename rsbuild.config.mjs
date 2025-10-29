import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

export default defineConfig({
  plugins: [
    pluginReact()
    // XÓA plugin htaccess vì Vercel không cần
  ],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss]
      }
    }
  },
  resolve: {
    alias: {
      '@': './src'
    }
  },
  html: {
    template: './public/index.html'
  },
  source: {
    tsconfigPath: './jsconfig.json'
  },
  output: {
    distPath: {
      root: 'dist'
    },
    dataUriLimit: {
      image: Number.MAX_SAFE_INTEGER,
      svg: Number.MAX_SAFE_INTEGER,
      font: Number.MAX_SAFE_INTEGER,
      media: Number.MAX_SAFE_INTEGER,
      assets: Number.MAX_SAFE_INTEGER
    }
  }
});