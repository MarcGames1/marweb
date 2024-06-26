import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/date/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '100%',
        md: '100%',
        lg: '992px',
        xl: '1280px',
      },
    },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
      fontSize: {
        xs: '.75rem', // 12px
        xtiny: '.8125rem', // 13px
        tiny: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.375rem', // 22px
        '3xl': '1.5rem', // 24px
        '4xl': '1.5625rem', // 25px
        '5xl': '1.625rem', // 26px
        '6xl': '1.75rem', // 28px
        '7xl': '2.5rem', // 40px
        '8xl': '6rem', // 40px
      },
    
    extend: {
      backgroundImage: {
        'homeBg-dark': "url('/images/background/bg-dark.jpg')",
        'homeTwoBg-dark': "url('/images/background/bgtwo.jpg')",
        previewBg: "url('/images/preview/previewbg.png')",
      },
      colors: {
        gray: '#F3F6F6',
        'gray-lite': '#44566C',
        oriange: '#E93B81',
        green: '#6AB5B9',
        'oriange-lite': '#FD7590',
        'color-50': '#C17CEB',
        'color-100': '#FCF4FF',
        'color-200': '#D566FF',
        'color-300': '#FFF4F4',
        'color-400': '#FF6080',
        'color-500': '#F3FAFF',
        'color-600': '#269FFF',
        'color-700': '#FEFAF0',
        'color-800': '#DDA10C',
        'color-810': '#F8FBFB',
        'color-820': '#8774FF',
        'color-830': '#FF75D8',
        'color-840': '#FF6786',
        // dart-color
        'color-910': '#A6A6A6',
        'color-920': '#1D1D1D',
        'color-930': '#FF6464',
        'color-940': '#9272D4',
        'color-950': '#5185D4',
        'color-960': '#CA56F2',
        'color-970': '#1C1C1C',
        'color-980': '#0D0D0D',
        'color-990': '#212425',
        // accent: '#FA5252',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

      },
      boxShadow: {
        icon: '0 4px 6px 0px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
      require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config