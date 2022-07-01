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
import { Brand } from 'components/atoms/Brand'
import { GradientBtn } from 'components/atoms/GradientBtn/index'
import LinkBtn from 'components/atoms/LinkBtn'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import GuestRoute from 'components/organisms/GuestRoute/GuestRoute'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { isEmail } from 'utils/regex'

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
   const [rePassword, setRePassword] = useState({
      text: '',
      hasError: true,
   })
   const [terms, setTerms] = useState(false)
   const [passwordMatch, setPasswordMatch] = useState(false)
   const [loading, setLoading] = useState(false)
   const { enqueueSnackbar } = useSnackbar()

   const router = useRouter()

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      try {
         setLoading(true)
         event.preventDefault()
         const { email } = userToRegister
         await registerWithEmailAndPassword(email, password.text)
         setLoading(false)
         router.push('/verify-account')
      } catch (error: any) {
         console.log(error)
         enqueueSnackbar(error.message, { variant: 'error' })
      }
   }

   useEffect(() => {
      if (password.text === rePassword.text) {
         setPasswordMatch(true)
      } else {
         setPasswordMatch(false)
      }
   }, [password.text, rePassword.text])

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
                  title="Crea una cuenta en grooploop"
                  subtitle="Regístrate con tu correo electrónico y contraseña"
               />
               <Box component="form" onSubmit={handleSubmit} sx={{ my: 2 }}>
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
                              setUserToRegister({
                                 ...userToRegister,
                                 email: event.target.value,
                              })
                           }
                           error={
                              !isEmail(userToRegister.email) &&
                              userToRegister.email.length > 0
                           }
                           helperText={
                              !isEmail(userToRegister.email)
                                 ? 'El correo electrónico no es válido'
                                 : ''
                           }
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <PasswordInput
                           hasError={
                              password.hasError ||
                              !passwordMatch ||
                              (rePassword.text.length > 0 &&
                                 rePassword.hasError &&
                                 password.text.length > 0)
                           }
                           setHasError={(hasError: boolean) =>
                              setPassword((password) => ({
                                 ...password,
                                 hasError,
                              }))
                           }
                           errorMessage={
                              !passwordMatch ? '' : 'El campo es erroneo'
                           }
                           password={password.text}
                           setPassword={(text: string) =>
                              setPassword((password) => ({ ...password, text }))
                           }
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <PasswordInput
                           hasError={
                              rePassword.hasError ||
                              !passwordMatch ||
                              (!passwordMatch &&
                                 password.text.length > 0 &&
                                 rePassword.text.length > 0)
                           }
                           setHasError={(hasError: boolean) =>
                              setRePassword((password) => ({
                                 ...password,
                                 hasError,
                              }))
                           }
                           errorMessage={
                              !passwordMatch ? '' : 'El campo es erroneo'
                           }
                           password={rePassword.text}
                           setPassword={(text: string) =>
                              setRePassword((password) => ({
                                 ...password,
                                 text,
                              }))
                           }
                        />
                        <Box sx={{ py: 0.5 }} />
                        {!passwordMatch && (
                           <>
                              <Typography variant="caption" color="error">
                                 Las contraseñas ingresadas no coinciden
                              </Typography>
                              <br />
                              <br />
                           </>
                        )}
                        <Typography variant="body2">
                           La contraseña debe tener al menos 8 caracteres, una
                           mayúscula y un número
                        </Typography>
                        <Box />
                        <br />
                        <FormGroup>
                           <FormControlLabel
                              control={<Checkbox checked={terms} />}
                              label="He leído y acepto los términos y condiciones"
                              onChange={(event, checked) => setTerms(checked)}
                           />
                        </FormGroup>
                     </Grid>
                  </Grid>
                  <GradientBtn
                     type="submit"
                     fullWidth
                     disabled={
                        userToRegister.email === '' || !terms || !passwordMatch
                     }
                     size="large"
                     loading={loading}
                  >
                     crear cuenta
                  </GradientBtn>
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
