import { Layout } from '@components/organisms/layout'
import PrivateRoute from '@components/organisms/PrivateRoute/PrivateRoute'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'

const PrivatePage: NextPage = () => {
   return (
      <PrivateRoute>
         <Layout>
            <Container maxWidth="lg">
               <Box
                  sx={{
                     my: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <Typography variant="h1" gutterBottom>
                     USER Profile
                  </Typography>
               </Box>
            </Container>
         </Layout>
      </PrivateRoute>
   )
}

export default PrivatePage
