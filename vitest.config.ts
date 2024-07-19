import path from 'path'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './tests/helpers',
      // environment: 'jsdom',
      coverage: {
        include: ['src/**/*.ts'],
        exclude: ['src/**/index.ts'],
        thresholds: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90
        }
      },
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@check': path.resolve(__dirname, 'src/check'),
        '@order': path.resolve(__dirname, 'src/order'),
        '@json': path.resolve(__dirname, 'src/json'),
        '@types': path.resolve(__dirname, 'src/types')
      }
    }
  })
)
