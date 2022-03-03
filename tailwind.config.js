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
        'title-color':'#6A6494',
        'new-old':'#655F90',
        'button' : '#D7DAE5',
        'button-disabled': '#E0E0ED',
        'button-text':'#746E9A',
        'navbar-border': '#CFDAF1',
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