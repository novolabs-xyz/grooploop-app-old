import PasswordInput from '@components/atoms/PasswordInput/PasswordInput'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import { GradientBtn } from 'components/atoms/GradientBtn/index'
import LinkBtn from 'components/atoms/LinkBtn'
import { Brand } from 'components/atoms/Brand'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import GuestRoute from 'components/organisms/GuestRoute/GuestRoute'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { logInWithEmailAndPassword } from 'libs/firebase'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { isEmail } from 'utils/regex'

const SignInWithPassPage: NextPage = () => {
   const [userToLogin, setUserToLogin] = useState({
      email: '',
   })
   const [password, setPassword] = useState({
      text: '',
      hasError: true,
   })
   const [loading, setLoading] = useState(false)
   const router = useRouter()
   const { enqueueSnackbar } = useSnackbar()

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      try {
         setLoading(true)
         event.preventDefault()
         const { email } = userToLogin
         await logInWithEmailAndPassword(email, password.text)
         setLoading(false)
         router.replace('/plans')
      } catch (error: any) {
         console.log(error)
         enqueueSnackbar(error.message, { variant: 'error' })
      }
   }

   return (
      <GuestRoute>
         <Navbar title="Ingresa a la app" arrowBack />

         <Container component="main">
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 68px)',
               }}
            >
               <Brand />
               <TitleAndSubtitle
                  title="Te damos la bienvenida a grooploop"
                  subtitle="Ingresa con tu cuenta de Google"
               />
               <Box component="form" onSubmit={handleSubmit} sx={{ my: 3 }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           id="email"
                           label="Correo electrónico"
                           name="email"
                           autoComplete="email"
                           onChange={(event) =>
                              setUserToLogin({
                                 ...userToLogin,
                                 email: event.target.value,
                              })
                           }
                           error={
                              !isEmail(userToLogin.email) &&
                              userToLogin.email.length > 0
                           }
                           helperText={
                              !isEmail(userToLogin.email)
                                 ? 'El correo electrónico no es válido'
                                 : ''
                           }
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <PasswordInput
                           hasError={password.hasError}
                           setHasError={(hasError: boolean) =>
                              setPassword((password) => ({
                                 ...password,
                                 hasError,
                              }))
                           }
                           errorMessage="El campo es erroneo"
                           password={password.text}
                           setPassword={(text: string) =>
                              setPassword((password) => ({ ...password, text }))
                           }
                        />
                        <br />
                        <br />

                        <Link href="/forgot-pass">
                           <a>¿Olvidaste la contraseña?</a>
                        </Link>
                     </Grid>
                  </Grid>
                  <GradientBtn
                     type="submit"
                     fullWidth
                     disabled={userToLogin.email === '' || password.hasError}
                     size="large"
                     loading={loading}
                  >
                     ingresar
                  </GradientBtn>
               </Box>
               <Typography variant="body1" gutterBottom>
                  ¿Primera vez aquí?
               </Typography>
               <LinkBtn href="/signup" color="inherit" size="large">
                  <Typography variant="button">crea tu cuenta</Typography>
               </LinkBtn>
            </Box>
         </Container>
      </GuestRoute>
   )
}

export default SignInWithPassPage
