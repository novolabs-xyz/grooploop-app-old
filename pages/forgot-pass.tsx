import { sendPasswordReset } from '@libs/firebase'
import { Box, Container, TextField } from '@mui/material'
import { Brand } from 'components/atoms/Brand'
import { GradientBtn } from 'components/atoms/GradientBtn/index'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import SentLink from 'components/molecules/SentLink'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { NextPage } from 'next'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { isEmail } from 'utils/regex'

const SignInWithPassPage: NextPage = () => {
   const [email, setEmail] = useState('')
   const [senderBtnPressed, setSenderBtnPressed] = useState(false)
   const [loading, setLoading] = useState(false)
   const [disabledBtn, setDisabledBtn] = useState(false)
   const { enqueueSnackbar } = useSnackbar()

   const handleSendEmail = async () => {
      try {
         await sendPasswordReset(email)
         setDisabledBtn(true)
      } catch (error: any) {
         console.error(error)
         enqueueSnackbar(error.message, { variant: 'error' })
      }
   }

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      try {
         setLoading(true)
         event.preventDefault()
         await sendPasswordReset(email)
         setLoading(false)
         setSenderBtnPressed(true)
      } catch (error: any) {
         console.error(error)
         enqueueSnackbar(error.message, { variant: 'error' })
      }
   }

   return (
      <>
         <Navbar title="Ingresa a la app" arrowBack />

         <Container component="main">
            {!senderBtnPressed ? (
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
                        error={email.length > 0 && !isEmail(email)}
                        helperText={
                           email.length > 0 &&
                           !isEmail(email) &&
                           'El correo electrónico no es válido'
                        }
                     />
                     <GradientBtn
                        type="submit"
                        fullWidth
                        disabled={
                           email.length === 0 ||
                           (email.length > 0 && !isEmail(email)) ||
                           loading
                        }
                        size="large"
                        loading={loading}
                     >
                        recuperar contraseña
                     </GradientBtn>
                  </Box>
               </Box>
            ) : (
               <SentLink
                  handleSendEmail={handleSendEmail}
                  title="Te hemos enviado un link a tu correo electrónico"
                  subtitle="Revisa tu bandeja de entrada o carpeta de spam. Allí encontrarás un link que te permitirá finalizar el registro."
                  disabledBtn={disabledBtn}
               />
            )}
         </Container>
      </>
   )
}

export default SignInWithPassPage
