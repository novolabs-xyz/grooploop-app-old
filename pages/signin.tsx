import LinkBtn from '@components/atoms/LinkBtn'
import { Brand } from '@components/atoms/Logo'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Divisor } from 'components/atoms/Divisor'
import GoogleBtn from 'components/atoms/GoogleBtn'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { AuthContext } from 'context/AuthContext'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const SignInPage: NextPage = () => {
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

   useEffect(() => {
      if (currentUser) {
         router.replace('/loops')
      }
   }, [currentUser])

   // hacer un authRoute component
   return (
      <>
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
                  title="Te damos la bienvenida a grooploop"
                  subtitle="Ingresa con tu cuenta de Google"
               />

               <GoogleBtn />
               <Box sx={{ margin: '1.5rem' }}>
                  <Typography variant="body1" align="center" gutterBottom>
                     Al continuar con tu cuenta de Google aceptas nuestros
                     Términos y condiciones.
                  </Typography>
               </Box>
               <Divisor />
               <Box sx={{ margin: '1.5rem' }}>
                  <LinkBtn href="/signup" color="inherit">
                     <Typography variant="button">
                        continuar con correo electrónico
                     </Typography>
                  </LinkBtn>
               </Box>
            </Box>
         </Container>
      </>
   )
}

export default SignInPage
