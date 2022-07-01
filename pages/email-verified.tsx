import { Box, Container } from '@mui/material'
import { GradientBtn } from 'components/atoms/GradientBtn'
import CheckIcon from 'components/atoms/icons/Check'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'

const EmailVerifiedPage: NextPage = () => {
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
                  title="Has activado tu cuenta de forma exitosa"
                  subtitle=""
               />
               <GradientBtn fullWidth>
                  <a href="/signin">Ingresar</a>
               </GradientBtn>
            </Box>
         </Container>
      </>
   )
}
export default EmailVerifiedPage
