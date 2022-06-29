import { Brand } from '@components/atoms/Logo'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
   return (
      <>
         <Navbar title="Ingresa a la app" arrowBack />
         <Container disableGutters>
            <Box
               sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 68px)',
                  margin: '0 auto',
               }}
            >
               <Brand />
            </Box>
         </Container>
      </>
   )
}

export default HomePage
