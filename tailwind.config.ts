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
        'primary-dark': '#0046cc',
      },
      backgroundColor: {
        'site-background': '#ffffff',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section': ['2rem', { lineHeight: '1.3' }],
        'section-mobile': ['1.75rem', { lineHeight: '1.3' }],
        'subsection': ['1.5rem', { lineHeight: '1.4' }],
        'subsection-mobile': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-large': ['1.125rem', { lineHeight: '1.6' }],
      }
    },
  },
  plugins: [],
}
export default config 