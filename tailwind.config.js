module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#FFF5E6',
        'sub-color': '#DDAA79'
      },
    },
  },
  plugins: [require("daisyui")],
}
