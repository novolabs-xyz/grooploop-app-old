import { Brand } from '@components/atoms/Logo'
import { Layout } from '@components/organisms/layout'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
   return (
      <Layout>
         <Container>
            <Box
               sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
               }}
            >
               <Brand />
            </Box>
         </Container>
      </Layout>
   )
}

export default HomePage
