import PasswordInput from '@components/atoms/PasswordInput/PasswordInput'
import { Layout } from '@components/organisms/layout'
import { AuthContext } from '@context/AuthContext'
import { registerWithEmailAndPassword } from '@libs/firebase'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
   Avatar,
   Box,
   Button,
   Container,
   Grid,
   TextField,
   Typography,
} from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

const SignUpPage: NextPage = () => {
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
      if (error.status) {
         setErrorSignin(error.message)
      }
   }

   return (
      <Layout>
         <Container component="main" maxWidth="xs">
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign up
               </Typography>
               <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           autoComplete="given-name"
                           name="firstName"
                           required
                           fullWidth
                           id="firstName"
                           label="First Name"
                           autoFocus
                           onChange={(event) =>
                              setUserToRegister({
                                 ...userToRegister,
                                 firstName: event.target.value,
                              })
                           }
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           required
                           fullWidth
                           id="lastName"
                           label="Last Name"
                           name="lastName"
                           autoComplete="family-name"
                           onChange={(event) =>
                              setUserToRegister({
                                 ...userToRegister,
                                 lastName: event.target.value,
                              })
                           }
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           id="email"
                           label="Email Address"
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
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                     disabled={
                        userToRegister.email === '' ||
                        userToRegister.firstName === '' ||
                        userToRegister.lastName === '' ||
                        password.hasError
                     }
                  >
                     Sign Up
                  </Button>
                  {errorSignin && (
                     <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        {errorSignin}
                     </Typography>
                  )}
                  <Grid container justifyContent="flex-end">
                     <Grid item>
                        <Link href="/signin">
                           <a>Already have an account? Sign in</a>
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </Layout>
   )
}

export default SignUpPage
