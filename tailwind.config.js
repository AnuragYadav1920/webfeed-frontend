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
        'custom-size': '400px', // You can specify any custom size here
        'custom-blog-height':'250px',
        'custom-textarea-height':'120px',
        'custom-card-height':'355px',
        'custom-account-sec-height': '70vh',
        'custom-hr':'0.1px'

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
        'custom-account-sec-width': '77%',
        'custom-blog-box-width':'80%',
        'custom-podium-width':'600px',
        'custom-filter-width':'60%'
      },
      backgroundColor:{
        'custom-bg-color':'#3b3b3b',
        'follow-button':'#ff404f'
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
     }

      // inset: {
      //   'custom-top': '10px',
      //   'custom-right': '40px',
      // },
      
    },
  },
  plugins: [],
}

