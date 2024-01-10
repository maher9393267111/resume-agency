import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        'blue': {
          100: "#1127E3",
          200: '#1b2ae6'
        },
        'purple': {
          100: '#7344fc'
        },
        'gray': {
          100: '#00000080',
          200: '#000000CC',
          300: '#FFFFFF80',
          400: '#FFFFFCC'
        }
      },

      screens: {
        'tab': "950px",
        'tab-800': "800px",
        'lg-1150': "1150px"
      },
      fontFamily: {
        'serif': ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
