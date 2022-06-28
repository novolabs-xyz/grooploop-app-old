import { signInWithGoogle } from '@libs/firebase'
import GoogleIcon from '@mui/icons-material/Google'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
const GoogleSignIn = () => {
   const Router = useRouter()

   const loginHandler = useCallback(async () => {
      try {
         await signInWithGoogle()
      } catch (error) {
         console.log('error')
         alert(error)
      }
   }, [Router])
   return (
      <IconButton onClick={loginHandler}>
         <GoogleIcon />
      </IconButton>
   )
}

export default GoogleSignIn
