import { Box, Typography } from '@mui/material'
import Logo from './Icon'

export const Brand = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
         }}
      >
         <Logo width="40px" height="40px" />
         <Typography variant="h1" sx={{ fontWeight: 500 }}>
            grooploop
         </Typography>
      </Box>
   )
}
