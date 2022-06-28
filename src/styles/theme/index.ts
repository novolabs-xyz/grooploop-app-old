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
   },

   typography: {
      h1: { fontFamily: fonts.titleFont, fontWeight: 800, fontSize: '40px' },
      h2: { fontFamily: fonts.titleFont, fontWeight: 700, fontSize: '32px' },
      h3: { fontFamily: fonts.titleFont, fontWeight: 600, fontSize: '28px' },
      h4: { fontFamily: fonts.titleFont, fontWeight: 600, fontSize: '24px' },
      h5: { fontFamily: fonts.titleFont, fontWeight: 600, fontSize: '22px' },
      h6: { fontFamily: fonts.titleFont, fontWeight: 600, fontSize: '18px' },
      subtitle1: {
         fontFamily: fonts.titleFont,
         fontWeight: 700,
         fontSize: '18px',
      },
      subtitle2: {
         fontFamily: fonts.titleFont,
         fontWeight: 700,
         fontSize: '16px',
      },
      body1: {
         fontFamily: fonts.paragraphFont,
         fontWeight: 400,
         fontSize: '16px',
      },
      body2: {
         fontFamily: fonts.paragraphFont,
         fontWeight: 400,
         fontSize: '15px',
      },
      button: {
         fontFamily: fonts.titleFont,
         fontWeight: 800,
         fontSize: '14px',
      },
   },

   // overrides: {
   //     Put overrides here...
   // },
})

theme = responsiveFontSizes(theme)

export default theme
