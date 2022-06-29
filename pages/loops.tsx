import { Container } from '@mui/material'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import PrivateRoute from 'components/organisms/PrivateRoute/PrivateRoute'
import { NextPage } from 'next'

const LoopsPage: NextPage = () => {
   return (
      <PrivateRoute>
         <Navbar title="Ingresa a la app" arrowBack />
         <Container component="main" maxWidth="xs">
            List of loops
         </Container>
      </PrivateRoute>
   )
}

export default LoopsPage
