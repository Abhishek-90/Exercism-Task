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
        'arrow-color':'#716B99',
        'bg-shadow':'#EBEFF9',
        'filters-color': '#F0F3F9',
        'new-old':'#655F90',
      },
      fontFamily:{
        Poppins:["Poppins", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 60px 60px 60px rgba(232,236,247, 0.7)',
      }
    },
  },
  plugins: [],
}