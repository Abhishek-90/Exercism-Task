module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'content-color':'#3F3A5A',
        'date-created-color':'#655F90',
        'track-color':'#5C5589',
        'hover':'#F4F7FD',
        'reviewer-name-color':'#170F46',
        'arrow-color':'#716B99'
      },
      fontFamily:{
        Poppins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}