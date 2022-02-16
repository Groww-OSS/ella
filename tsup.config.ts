import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [ './src/index.ts' ],
  splitting: true,
  sourcemap: false,
  clean: true,
  format: [ 'cjs', 'esm' ],
  legacyOutput: true,
  minify: true,
  skipNodeModulesBundle: true,
  dts: true,
  tsconfig: './tsconfig.json'
});