/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        primary: '#1C6758',
        secondary: '#3D8361',
        accent: '#6bf5c0',
        neutral: '#222'
      },
      screens: {
        md: '800px',
        sm: '400px'
      }
    },
    fontFamily: {
      content: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      how: ['Merienda', 'sans-serif'],
      title: ['Josefin Sans', 'sans-serif']
    }
  }
}
