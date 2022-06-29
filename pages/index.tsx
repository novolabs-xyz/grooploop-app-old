import { Box, Container } from '@mui/material'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'

const SignInPage: NextPage = () => {
   return (
      <Container component="main" maxWidth="xs">
         <Navbar title="Ingresa a la app" arrowBack />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            HOME
         </Box>
      </Container>
   )
}

export default SignInPage
