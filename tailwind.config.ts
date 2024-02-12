import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        temp1: {
          "coverbg": "#1F2544",
          "main_text_color": "#ffffff",
          "icon_color": "#F6ECA9",
          
          "icon_border_color": "#F6ECA9",
          "accordion_border": "#ffffff",
          "accordion_title": "#F6ECA9",
         "accordion_bg":"#1F2544",
         "accordion_desc_bg":"#ffffff",
          "accordion_desc": "#000000",
         "arrows_color" : "#ffffff",
          "arrows_bg_color": "#1F2544",
          "phone_btn_bg": "#ffffff",
          "phone_text_color": "#1F2544",
          "phone_icon_color": "#1F2544",
          "placeholder_text_color": "#1F2544",
           "slider_bg":"#B4B4B8",
           "slider_title_color":"#1F2544",
           "slider_underline_border":"#1F2544",
           "contact_btn_bg":"#F6ECA9",
           "contact_btn_text_color":"#ffffff",
           "contact_input_border_color":"#ffffff",
           "contact_overlay_bg":"#F6ECA9",

         
      },
      temp2: {
        "coverbg": "#000000",
        "main_text_color": "#ffffff",
        "icon_color": "#8BBA83",
        "icon_border_color": "#8BBA83",
        "accordion_border": "#8BBA83",
        "accordion_title": "#FAFAFA",
        "accordion_desc": "#000000",
        "accordion_bg":"#000000",
        "accordion_desc_bg":"#ffffff",
       "arrows_color" : "#ffffff",
        "arrows_bg_color": "#000000",
        "phone_btn_bg": "#8BBA83",
        "phone_text_color": "#ffffff",
        "phone_icon_color": "#ffffff",
        "placeholder_text_color": "#22092C",
         "slider_bg":"#B4B4B8",
         "slider_title_color":"#000000",
         "slider_underline_border":"#000000",
         "contact_btn_bg":"#8BBA83",
         "contact_btn_text_color":"#000000",
         "contact_input_border_color":"#ffffff",
         "contact_overlay_bg":"#8BBA83",
      },
      temp3: {
        "coverbg": "FFE3BB",
        "main_text_color": "#000000",
        "icon_color": "#022C57",
        "icon_border_color": "#022C57",
        "accordion_border": "#C59169",
        "accordion_title": "#1F2544",
        "accordion_desc": "#000000",
        "accordion_bg":"FFE3BB",
        "accordion_desc_bg":"#ffffff",
       "arrows_color" : "#ffffff",
        "arrows_bg_color": "#1F2544",
        "phone_btn_bg": "#C59169",
        "phone_text_color": "#ffffff",
        "phone_icon_color": "#ffffff",
        "placeholder_text_color": "#22092C",
         "slider_bg":"#1F2544",
         "slider_title_color":"#ffffff",
         "slider_underline_border":"#C59169",
         "contact_btn_bg":"#C59169",
         "contact_btn_text_color":"#000000",
         "contact_input_border_color":"#000000",
         "contact_overlay_bg":"#022C57",
      },
      temp4: {
        "coverbg": "FFE3BB",
        "main_text_color": "#000000",
        "icon_color":"#BE1E2D",
        "icon_border_color": "#BE1E2D",
        "accordion_border": "#000000",
        "accordion_title": "#BE1E2D",
        "accordion_desc": "#000000",
        "accordion_bg":"FFE3BB",
        "accordion_desc_bg":"#ffffff",
       "arrows_color" : "#ffffff",
        "arrows_bg_color": "#BE1E2D",
        "phone_btn_bg": "#000000",
        "phone_text_color": "#ffffff",
        "phone_icon_color": "#ffffff",
        "placeholder_text_color": "#22092C",
         "slider_bg":"#000000",
         "slider_title_color":"#ffffff",
         "slider_underline_border":"#ffffff",
         "contact_btn_bg":"#000000",
         "contact_btn_text_color":"#ffffff",
         "contact_input_border_color":"#000000",
         "contact_overlay_bg":"#BE1E2D",
      },


      temp5: {
        "coverbg": "#ffffff",
          "main_text_color": "#000000",
          "icon_color": "#ccae32",
          "icon_border_color": "#ccae32",
          "accordion_border": "#000000",
          "accordion_title": "#ccae32",
          "accordion_desc": "#000000",
          "accordion_bg":"#ffffff",
         "arrows_color" : "#ffffff",
          "arrows_bg_color": "#ccae32",
          "phone_btn_bg": "#000000",
          "phone_text_color": "#ffffff",
          "phone_icon_color": "#ffffff",
          "placeholder_text_color": "#000000",
          "slider_bg":"#000000",
          "slider_title_color":"#ffffff",
          "slider_underline_border":"#ccae32",
          "contact_btn_bg":"#ccae32",
          "contact_btn_text_color":"#000000",
          "contact_input_border_color":"#000000",
          "contact_overlay_bg":"#ccae32",
    },
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        'blue': {
          100: "#1127E3",
          200: '#1b2ae6'
        },
        'purple': {
          100: '#7344fc'
        },
        'gray': {
          100: '#00000080',
          200: '#000000CC',
          300: '#FFFFFF80',
          400: '#FFFFFCC'
        }
      },

      screens: {
        'tab': "950px",
        'tab-800': "800px",
        'lg-1150': "1150px"
      },
      fontFamily: {
        'serif': ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
