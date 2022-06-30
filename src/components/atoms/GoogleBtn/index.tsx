import { signInWithGoogle } from '@libs/firebase'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { GoogleIcon } from './GoogleIcon'

const GoogleBtn = () => {
   const router = useRouter()

   const loginHandler = useCallback(async () => {
      try {
         const result = await signInWithGoogle()
         console.log(result)
         if (result.user) {
            router.replace('/plans')
         }
      } catch (error) {
         console.log('error')
         alert(error)
      }
   }, [router])
   return (
      <Button
         onClick={loginHandler}
         sx={{
            backgroundColor: '#000',
            width: '90%',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            borderRadius: 2,
         }}
         size="large"
         startIcon={<GoogleIcon />}
      >
         <Typography
            variant="subtitle2"
            sx={{ color: '#fff', fontSize: 14, fontWeight: 600 }}
         >
            Continuar con Google
         </Typography>
      </Button>
   )
}

export default GoogleBtn
