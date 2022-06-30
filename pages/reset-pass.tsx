import { Brand } from '@components/atoms/Logo'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import GuestRoute from 'components/organisms/GuestRoute/GuestRoute'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import type { NextPage } from 'next'

const VerifyAccountPage: NextPage = () => {
   return (
      <GuestRoute>
         <Navbar title="Ingresa a la app" arrowBack />
         <Container disableGutters>
            <Box
               sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 68px)',
                  margin: '0 auto',
               }}
            >
               <Brand />
               <TitleAndSubtitle
                  title="Reestablece tu contraseña"
                  subtitle="Hemos enviado a tu correo electrónico un link para ingresar una nueva contraseña."
               />
            </Box>
         </Container>
      </GuestRoute>
   )
}

export default VerifyAccountPage
