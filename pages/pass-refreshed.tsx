import { Box, Container } from '@mui/material'
import { GradientBtn } from 'components/atoms/GradientBtn'
import CheckIcon from 'components/atoms/icons/Check'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'

const PassRefreshedPage: NextPage = () => {
   return (
      <>
         <Navbar title="Ingresa a la app" arrowBack />
         <Container component="main">
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 68px)',
                  p: 2,
               }}
            >
               <CheckIcon />
               <TitleAndSubtitle
                  title="La contraseña se ha cambiado correctamente"
                  subtitle="Ahora debes ingresar a la aplicación con tu correo electrónico y tu nueva contraseña"
               />
               <GradientBtn fullWidth>
                  <a href="/signin">Ingresar</a>
               </GradientBtn>
            </Box>
         </Container>
      </>
   )
}
export default PassRefreshedPage
