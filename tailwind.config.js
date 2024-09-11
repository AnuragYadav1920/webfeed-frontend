/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom':'100%',
        'custom-size': '400px', 
        'custom-blog-height':'250px',
        'custom-textarea-height':'120px',
        'custom-card-height':'355px',
        'custom-account-sec-height': '70vh',
        'custom-hr':'0.1px',
        'custom-profile&coverImage-height':'500px',

      },
      minHeight:{
        'custom-size': '550px'
      },
      width:{
        'custom':'80%',
        'custom-width': '92.5vw',
        'custom-blog-width':'500px',
        'custom-input-width':'450px',
        'custom-button-width':'250px',
        'custom-card-width':'220px',
        'custom-account-sec-width': '70%',
        'custom-blog-box-width':'80%',
        'custom-podium-width':'600px',
        'custom-filter-width':'60%',
        'custom-profile&coverImage-width':'700px',
        'custom-pc-width':'100vw',
        'custom-deatils-width':'40%',
        
      },
      backgroundColor:{
        'custom-bg-color':'#3b3b3b',
        'follow-button':'#ff404f'
      },
      backgroundImage:{
        'custom': 'linear-gradient(to left, rgba(24, 24, 35, 0.7), rgba(18, 18, 21, 0.7))'
      },
      flexBasis:{
        'left-basis':'50%',
        'right-basis': '35%',
        'nav-left':'30%',
        'nav-right':'40%',
        'left-account-basis':'60%',
        'right-account-basis': '18%',
      },
      borderRadius:{
        'radius':'100px'
      },
      borderWidth:{
        'custom': '1px'
      },
      rotate:{
        'custom-rotate':'45deg'
      },
      skew:{
        'custom-logo-skew': '20deg',
        'custom-skew':'40deg'
      },
     fontSize:{
      'custom':'16px'
     },
     border:{
      'custom':'1px'
     },

    inset: {
      'custom-top': '5%',
      'custom-left': '26%',
      'custom':'100%'
    },
      
    },
  },
  plugins: [],
}

