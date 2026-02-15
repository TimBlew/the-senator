import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Senator burgundy/red theme
        brand: {
          primary: '#982F31',
          subtle: '#FAECEB',
          hover: '#7A2629',
        },
        text: {
          primary: '#982F31',
          secondary: '#6B4E4F',
          muted: '#8B7475',
          light: '#FAECEB',
        },
        bg: {
          canvas: '#FFFFFF',
          subtle: '#FBF8F7',
          dark: '#4A2D2E',
        },
        border: {
          default: '#E1D7D1',
          subtle: '#E7DFDB',
        },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Funnel Sans"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '72px', letterSpacing: '-2.88px', fontWeight: '500' }],
        'h1': ['64px', { lineHeight: '72px', letterSpacing: '-2.56px', fontWeight: '500' }],
        'h2': ['48px', { lineHeight: '54px', letterSpacing: '-1.92px', fontWeight: '500' }],
        'h3': ['36px', { lineHeight: '48px', letterSpacing: '-0.72px', fontWeight: '500' }],
        'h4': ['28px', { lineHeight: '36px', letterSpacing: '-1.12px', fontWeight: '500' }],
        'text-lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.36px' }],
        'text-md': ['16px', { lineHeight: '28px', letterSpacing: '-0.36px' }],
        'text-sm': ['14px', { lineHeight: '18px', letterSpacing: '-0.28px' }],
      },
    },
  },
  plugins: [],
};

export default config;