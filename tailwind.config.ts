import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0057ff',
        secondary: '#def6f6',
        'primary-dark': '#0046cc', // darker shade for hover states
      },
      backgroundColor: {
        'site-background': '#ffffff',
      }
    },
  },
  plugins: [],
}
export default config 