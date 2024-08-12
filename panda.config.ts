import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // 사용 예시 -> background: 'primary.01'
          primary: {
            '01': { value: '#50596B' },
            '02': { value: '#EBE7DE' },
            '03': { value: '#FAD56B' } // Yellow 01
          },
          secondary: {
            '01': { value: '#CE7866' },
            '02': { value: '#AD8E74' },
            '03': { value: '#F3EEE6' },
            '04': { value: '#DED7CE' }, // 호버 전
            '05': { value: '#C8B59C' } // 호버 후
          },
          gray: {
            '01': { value: '#161616' },
            '02': { value: '#707070' },
            '03': { value: '#9A9A9A' },
            '04': { value: '#C4C4C4' },
            '05': { value: '#E7E7E7' },
            '06': { value: '#F4F4F4' }
          }
        }
    }},
  },

  // The output directory for your css system
  outdir: "styled-system",

  // JSX Style Props 사용 활성화 
  jsxFramework: 'react',
});
