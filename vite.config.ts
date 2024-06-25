import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'utility-lib'
    },
    sourcemap: true,
    target: 'es6',
    minify: false,
    rollupOptions: {
      external: ['./tests']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    dts({ outDir: 'dist', exclude: ['**/*.test.ts', 'test/', 'vitest.config.*'] }),
    viteTsConfigPaths()
  ]
})
