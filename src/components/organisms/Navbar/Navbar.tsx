import { LogOutBtn } from '@components/atoms/LogoutBtn/LogoutBtn'
import { AuthContext } from '@context/AuthContext'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { AppBar, Box, IconButton, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

interface INavbar {
   title: string
   arrowBack?: boolean
}
export const Navbar: FC<INavbar> = (props) => {
   const { title, arrowBack } = props
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

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
         position="relative"
      >
         {arrowBack && (
            <Box sx={{ position: 'absolute', left: 20 }}>
               <IconButton onClick={() => router.back()}>
                  <ArrowBackIosIcon />
               </IconButton>
            </Box>
         )}
         <Typography variant="h6">{title}</Typography>

         {currentUser && (
            <>
               <small>{currentUser.email}</small>
               <LogOutBtn />
            </>
         )}
      </AppBar>
   )
}
