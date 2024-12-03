/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA', // Lighter blue for dark mode
        secondary: '#93C5FD',
        dark: {
          50: '#1A1A1A',
          100: '#1E1E1E',
          200: '#2D2D2D',
          300: '#393939',
          400: '#404040',
          500: '#737373',
          600: '#A3A3A3',
          700: '#D4D4D4',
        },
      },
      fontFamily: {
        sans: ['Atkinson', 'sans-serif'],
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.dark.700'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.dark.500'),
            '--tw-prose-bullets': theme('colors.dark.500'),
            '--tw-prose-hr': theme('colors.dark.300'),
            '--tw-prose-quotes': theme('colors.dark.700'),
            '--tw-prose-quote-borders': theme('colors.dark.300'),
            '--tw-prose-captions': theme('colors.dark.500'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.dark.700'),
            '--tw-prose-pre-bg': theme('colors.dark.200'),
            '--tw-prose-th-borders': theme('colors.dark.300'),
            '--tw-prose-td-borders': theme('colors.dark.200'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}