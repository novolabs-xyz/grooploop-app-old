import PasswordInput from '@components/atoms/PasswordInput/PasswordInput'
import GoogleSignIn from '@components/molecules/SignIn/GoogleSignIn'
import { Layout } from '@components/organisms/layout'
import { AuthContext } from '@context/AuthContext'
import { logInWithEmailAndPassword } from '@libs/firebase'
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

const SignInPage: NextPage = () => {
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState({
      text: '',
      hasError: true,
   })
   const [errorSignin, setErrorSignin] = useState('')

   if (currentUser) {
      router.replace('/')
      return <></>
   }

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { error } = await logInWithEmailAndPassword(email, password.text)
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
                  Sign in
               </Typography>
               <Box
                  component="form"
                  method="post"
                  sx={{ mt: 1 }}
                  onSubmit={handleSubmit}
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoComplete="email"
                     autoFocus
                     onChange={(event) => {
                        setEmail(event.target.value)
                     }}
                  />

                  <PasswordInput
                     hasError={password.hasError}
                     setHasError={(hasError: boolean) =>
                        setPassword((password) => ({ ...password, hasError }))
                     }
                     errorMessage="El campo es erroneo"
                     password={password.text}
                     setPassword={(text: string) =>
                        setPassword((password) => ({ ...password, text }))
                     }
                  />

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                     disabled={!email || password.hasError}
                  >
                     Sign In
                  </Button>
                  {errorSignin && (
                     <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        {errorSignin}
                     </Typography>
                  )}
                  <Grid container>
                     <Grid item xs>
                        <Link href="/forgot-password">
                           <a>Forgot password?</a>
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href="/signup">
                           <a>{"Don't have an account? Sign Up"}</a>
                        </Link>
                        <GoogleSignIn />
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </Layout>
   )
}

export default SignInPage
