import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { colors } from './colors'
import { fonts } from './fonts'

// Create a theme instance.
let theme = createTheme({
   palette: {
      primary: {
         main: colors.primaryMainColor,
         light: colors.primaryLightColor,
         dark: colors.primaryDarkColor,
      },
      secondary: {
         main: colors.secondaryMainColor,
         light: colors.secondaryLightColor,
         dark: colors.secondaryDarkColor,
      },
      error: {
         main: colors.errorMainColor,
      },
      success: {
         main: colors.successMainColor,
      },
      text: {
         primary: colors.textPrimaryColor,
         secondary: colors.textSecondaryColor,
         disabled: colors.textDisabledColor,
      },
   },

   typography: {
      h1: {
         fontFamily: fonts.titleFont,
         fontWeight: 800,
         fontSize: '40px',
         color: colors.textPrimaryColor,
      },
      h2: {
         fontFamily: fonts.titleFont,
         fontWeight: 700,
         fontSize: '32px',
         color: colors.textPrimaryColor,
      },
      h3: {
         fontFamily: fonts.titleFont,
         fontWeight: 600,
         fontSize: '28px',
         color: colors.textPrimaryColor,
      },
      h4: {
         fontFamily: fonts.titleFont,
         fontWeight: 600,
         fontSize: '24px',
         color: colors.textPrimaryColor,
      },
      h5: {
         fontFamily: fonts.titleFont,
         fontWeight: 600,
         fontSize: '22px',
         color: colors.textPrimaryColor,
      },
      h6: {
         fontFamily: fonts.titleFont,
         fontWeight: 600,
         fontSize: '18px',
         color: colors.textPrimaryColor,
      },
      subtitle1: {
         fontFamily: fonts.titleFont,
         fontWeight: 600,
         fontSize: '18px',
         color: colors.textPrimaryColor,
      },
      subtitle2: {
         fontFamily: fonts.titleFont,
         fontWeight: 500,
         fontSize: '15px',
         color: colors.textPrimaryColor,
      },
      body1: {
         fontFamily: fonts.paragraphFont,
         fontWeight: 400,
         fontSize: '16px',
         color: colors.textSecondaryColor,
      },
      body2: {
         fontFamily: fonts.paragraphFont,
         fontWeight: 400,
         fontSize: '15px',
         color: colors.textSecondaryColor,
      },
      button: {
         fontFamily: fonts.titleFont,
         fontWeight: 800,
         fontSize: '14px',
         color: colors.textPrimaryColor,
      },
   },
   components: {
      // Name of the component
      MuiOutlinedInput: {
         styleOverrides: {
            // Name of the slot
            root: {
               // Some CSS
               borderRadius: 8,
            },
         },
      },
   },
})

theme = responsiveFontSizes(theme)

export default theme
