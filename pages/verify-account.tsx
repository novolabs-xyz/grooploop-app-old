import Container from '@mui/material/Container'
import SentLink from 'components/molecules/SentLink'
import GuestRoute from 'components/organisms/GuestRoute/GuestRoute'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { getCurrentUser, sendEmailToVerifyAccount } from 'libs/firebase'
import type { NextPage } from 'next'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

const VerifiedAccountPage: NextPage = () => {
   const [disabledBtn, setDisabledBtn] = useState(false)
   const { enqueueSnackbar } = useSnackbar()

   const handleSendEmail = async () => {
      try {
         const currentUser = await getCurrentUser()
         if (currentUser) {
            await sendEmailToVerifyAccount(currentUser)
         }
         setDisabledBtn(true)
      } catch (error: any) {
         console.error(error)
         enqueueSnackbar(error.message, { variant: 'error' })
      }
   }

   return (
      <GuestRoute>
         <Navbar title="Ingresa a la app" arrowBack />
         <Container disableGutters>
            <SentLink
               handleSendEmail={handleSendEmail}
               title="Te hemos enviado un link a tu correo electrónico"
               subtitle="Revisa tu bandeja de entrada o carpeta de spam. Allí encontrarás un link que te permitirá finalizar el registro."
               disabledBtn={disabledBtn}
            />
         </Container>
      </GuestRoute>
   )
}

export default VerifiedAccountPage
