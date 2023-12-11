/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient':
          'linear-gradient(to top, oklch(var(--p)), oklch(var(--n)))',
        'secondary-gradient':
          'linear-gradient(to top,  theme("colors.red.100"), theme("colors.white"))',
      },
    },
  },

  // add daisyUI plugin
  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  daisyui: {
    themes: [
      {
        marwebTheme: {
          primary: '#143D73',

          secondary: '#123159',

          accent: '#88E8F2',

          neutral: '#102540',

          'base-100': '#ffffff',

          info: '#177FBF',

          success: '#00fb5e',

          warning: '#d19800',

          error: '#ff6a7e',
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]

    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
