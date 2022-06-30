import { AuthContext } from '@context/AuthContext'
import { registerWithEmailAndPassword } from '@libs/firebase'
import { Box, Container, TextField, Typography } from '@mui/material'
import { Brand } from 'components/atoms/Logo'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { GradientBtn } from 'components/GradientBtn/index'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

const SignInWithPassPage: NextPage = () => {
   const [userToRegister, setUserToRegister] = useState({
      email: '',
      firstName: '',
      lastName: '',
   })
   const [password] = useState({
      text: '',
      hasError: true,
   })
   const [errorSignin, setErrorSignin] = useState('')
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

   if (currentUser) {
      router.replace('/')
      return <></>
   }
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const { email } = userToRegister
      const { error } = await registerWithEmailAndPassword(email, password.text)
      if (error?.status) {
         setErrorSignin(error.message)
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
                     onChange={(event) =>
                        setUserToRegister({
                           ...userToRegister,
                           email: event.target.value,
                        })
                     }
                  />
                  <GradientBtn
                     onClick={() => {
                        console.log('submit')
                     }}
                     fullWidth
                     disabled={userToRegister.email === '' || password.hasError}
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
