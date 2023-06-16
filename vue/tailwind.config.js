/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem',
      },
      maxWidth: {
        '128': '32rem',
      }
     },
     fontFamily: {
      'cursive': ['Comic Sans MS, Comic Sans, cursive'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
     }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: "class"
}

