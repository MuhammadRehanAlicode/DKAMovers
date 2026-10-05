/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.js"],
  theme: {
    extend: {
      colors: {
        dka: {
          navy: '#0C2038',
          navy2: '#112B47',
          ink: '#081420',
          blue: '#1E7A8C',
          blueLight: '#4FA8B8',
          amber: '#FF7B29',
          amberDark: '#DE5C10',
          light: '#F6F2E9'
        }
      },
      boxShadow: {
        glow: '0 0 35px rgba(255,123,41,.25)',
        soft: '0 20px 45px rgba(8,20,32,.14)'
      },
      fontFamily: {
        display: ['Space Grotesk', 'Cairo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
