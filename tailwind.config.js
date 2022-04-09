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
        'button' : '#D6D8E4',
        'button-disabled': '#E0E0ED',
        'button-text':'#746E9A',
        'selected-button-text':'#1A1249',
        'navbar-border': '#CFDAF1',
        'navbar-text':'#5F588B',
        'static-text':'#130B43',
        'page-button':'#D6D9E4',
        'page-button-focus': '#76709F',
        'focus-button-bg' : '#E1EBFF',
        'search-text': '#625C8E',
        'notification-bell': '#E79820',
        'gradient-start': '#2200FF',
        'gradient-end': '#9E00FF',
        'dot': '#D85050',
      },
      fontFamily:{
        Poppins:["Poppins", "sans-serif"],
      },
      boxShadow: {
        '3xl': '10px 15px 60px 30px rgba(232,236,247, 1)',
        'buttonRB': '1px 1px 0px 3px rgb(213,216,228)',
        'notification': '1px 0px 8px 4px rgba(235,230,212,1)',
        'dashboard': '1px 1px 13px 5px rgba(192,204,237,1)'
      },
      borderWidth:{
        '3':'3px',
      },
      backgroundImage: {
        'hero-pattern': "url('constants/ellipse.jpg')",
        'downArrow':"url('./components/FilterBar/Shape.svg')",
      }
    },
  },
  plugins: [],
}