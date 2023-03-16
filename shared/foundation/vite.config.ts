import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// 노드 모듈에서 다른 확장자를 읽어 올 수 있게해줌 우리같은경우 TS를 사용하니까 js 모듈을 사용하려고하면 필요함 근데 우리가 쓰는건 대부분 ts지 않나 싶음
import resolve from '@rollup/plugin-node-resolve';
// .json 파일을 esmodule로 변환해서 사용할 수 있게 해줍니다.
import json from '@rollup/plugin-json';
// 번들 파일에 declaration 파일을 만들어줌 없으면 타입이 안만들어짐.
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default defineConfig({
  plugins: [
    dts({
      include: ['src/'],
      entryRoot: 'src',
    }),
    react(),
  ],
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: '@template/foundation',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      plugins: [resolve({ extensions }), json()],
    },
  },
});
