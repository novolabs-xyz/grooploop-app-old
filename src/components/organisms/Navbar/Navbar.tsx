import { LogOutBtn } from '@components/molecules/LogoutBtn/LogoutBtn'
import { AuthContext } from '@context/AuthContext'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { AppBar, Box, Button, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import { useContext } from 'react'

export const Navbar = () => {
   const { currentUser } = useContext(AuthContext)

   return (
      <AppBar
         sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: ' 1.2rem',
            alignItems: 'center',
            boxShadow: '0px 1px 8px  rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff',
         }}
         position="fixed"
      >
         <Box sx={{ position: 'absolute', left: 20 }}>
            <IconButton>
               <ArrowBackIosIcon />
            </IconButton>
         </Box>
         <Typography variant="h6">Ingresar a la app</Typography>

         {currentUser && (
            <>
               <Link href="/user/profile">
                  <Button component="a">profile</Button>
               </Link>
               <strong>{currentUser.email}</strong>
               <LogOutBtn />
            </>
         )}
      </AppBar>
   )
}
