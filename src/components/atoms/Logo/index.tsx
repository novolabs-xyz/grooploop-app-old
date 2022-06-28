import { Box, Typography } from '@mui/material'
import Logo from './Icon'

export const Brand = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            width: 195,
            height: 65,
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <Logo width="40px" height="40px" />
         <Typography variant="h1" sx={{ fontWeight: 500 }}>
            grooploop
         </Typography>
      </Box>
   )
}
