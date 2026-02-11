/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c0c0c',
        background: '#f5f5f5',
        accent: '#7b46ff',
        light: '#f5f5f5',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['190px', { lineHeight: '170px' }],
        'hero-tablet': ['170px', { lineHeight: '110px' }],
        'hero-mobile': ['72px', { lineHeight: '60px' }],
        'hero-xs': ['48px', { lineHeight: '46px' }],
        'section-title': ['80px', { lineHeight: '1' }],
        'section-title-tablet': ['60px', { lineHeight: '1' }],
        'section-title-mobile': ['40px', { lineHeight: '1' }],
        'section-title-xs': ['32px', { lineHeight: '1' }],
        'card-title': ['24px', { lineHeight: '1.2' }],
        'body': ['20px', { lineHeight: '1.65' }],
        'body-mobile': ['18px', { lineHeight: '1.65' }],
        'small': ['16px', { lineHeight: '1.5' }],
        'footnote': ['12px', { lineHeight: '1.5' }],
        'services-list': ['32px', { lineHeight: '1.2' }],
        'services-list-tablet': ['24px', { lineHeight: '1.2' }],
        'services-list-mobile': ['20px', { lineHeight: '1.2' }],
      },
      spacing: {
        '4.5': '18px',
        '18': '70px',
        '20': '80px',
        '30': '120px',
        'content': '70px',
        'content-tablet': '48px',
        'content-mobile': '24px',
      },
      maxWidth: {
        'screen-max': '1512px',
        'text': '810px',
      },
      borderRadius: {
        'button': '46px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
      },
      aspectRatio: {
        'project': '661 / 455',
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 10s ease-out infinite',
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1512px',
    },
  },
  plugins: [],
}
