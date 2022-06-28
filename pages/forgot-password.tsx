import { Layout } from '@components/organisms/layout'
import { AuthContext } from '@context/AuthContext'
import { sendPasswordReset } from '@libs/firebase'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
   Avatar,
   Box,
   Button,
   Container,
   TextField,
   Typography,
} from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

const SignInPage: NextPage = () => {
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()
   const [email, setEmail] = useState('')

   if (currentUser) {
      router.replace('/')
      return <></>
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      sendPasswordReset(email)
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
                  Forgot password?
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

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                  >
                     Send reset email
                  </Button>
               </Box>
            </Box>
         </Container>
      </Layout>
   )
}

export default SignInPage
