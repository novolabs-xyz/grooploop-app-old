import { sendPasswordReset } from '@libs/firebase'
import { Box, Container, TextField, Typography } from '@mui/material'
import { Brand } from 'components/atoms/Logo'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { GradientBtn } from 'components/GradientBtn/index'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SignInWithPassPage: NextPage = () => {
   const [email, setEmail] = useState('')
   const [errorSignin, setErrorSignin] = useState('')
   const router = useRouter()

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const result = await sendPasswordReset(email)
      if (result.error?.status) {
         setErrorSignin(result.error.message)
      } else {
         setErrorSignin('')
         router.push('/reset-pass')
      }
   }

   return (
      <>
         <Navbar title="Ingresa a la app" arrowBack />

         <Container component="main">
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Brand />
               <TitleAndSubtitle
                  title="Recupera tu contraseña"
                  subtitle="Ingresa tu correo electrónicoe"
               />
               <Box component="form" onSubmit={handleSubmit} sx={{ my: 3 }}>
                  <TextField
                     required
                     fullWidth
                     id="email"
                     label="Correo electrónico"
                     name="email"
                     autoComplete="email"
                     onChange={(event) => setEmail(event.target.value)}
                  />
                  <GradientBtn
                     type="submit"
                     fullWidth
                     disabled={email === '' || errorSignin.length > 0}
                     size="large"
                  >
                     recuperar contraseña
                  </GradientBtn>
                  {errorSignin && (
                     <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        {errorSignin}
                     </Typography>
                  )}
               </Box>
            </Box>
         </Container>
      </>
   )
}

export default SignInWithPassPage
