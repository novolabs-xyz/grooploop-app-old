import PasswordInput from '@components/atoms/PasswordInput/PasswordInput'
import { registerWithEmailAndPassword } from '@libs/firebase'
import {
   Box,
   Checkbox,
   Container,
   FormControlLabel,
   FormGroup,
   Grid,
   TextField,
   Typography,
} from '@mui/material'
import LinkBtn from 'components/atoms/LinkBtn'
import { Brand } from 'components/atoms/Logo'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { GradientBtn } from 'components/GradientBtn/index'
import GuestRoute from 'components/organisms/GuestRoute/GuestRoute'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'
import { useState } from 'react'

const SignInWithPassPage: NextPage = () => {
   const [userToRegister, setUserToRegister] = useState({
      email: '',
      firstName: '',
      lastName: '',
   })
   const [password, setPassword] = useState({
      text: '',
      hasError: true,
   })
   const [errorSignin, setErrorSignin] = useState('')

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const { email } = userToRegister
      const { error } = await registerWithEmailAndPassword(email, password.text)
      if (error?.status) {
         setErrorSignin(error.message)
      }
   }

   return (
      <GuestRoute>
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
                  title="Crea una cuenta en grooploop"
                  subtitle="Regístrate con tu correo electrónico y contraseña"
               />
               <Box component="form" onSubmit={handleSubmit} sx={{ my: 3 }}>
                  <Grid container spacing={3}>
                     <Grid item xs={12}>
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
                        <Box sx={{ py: 1 }} />

                        <Typography variant="body2">
                           La contraseña debe tener al menos 8 caracteres, una
                           mayúscula y un número
                        </Typography>
                        <Box />
                        <br />
                        <FormGroup>
                           <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="He leído y acepto los términos y condiciones"
                           />
                        </FormGroup>
                     </Grid>
                  </Grid>
                  <GradientBtn
                     onClick={() => {
                        console.log('submit')
                     }}
                     fullWidth
                     disabled={userToRegister.email === '' || password.hasError}
                     size="large"
                  >
                     crear cuenta
                  </GradientBtn>
                  {errorSignin && (
                     <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        {errorSignin}
                     </Typography>
                  )}
               </Box>
               <Typography variant="body1" gutterBottom>
                  ¿Ya tenés cuenta?
               </Typography>
               <LinkBtn href="/signin-wp" color="inherit" size="large">
                  <Typography variant="button">
                     ingresa con tu cuenta
                  </Typography>
               </LinkBtn>
            </Box>
         </Container>
      </GuestRoute>
   )
}

export default SignInWithPassPage
