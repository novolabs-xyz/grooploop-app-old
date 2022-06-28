import { Navbar } from '@components/organisms/Navbar/Navbar'
import Container from '@mui/material/Container'
import { FC } from 'react'

export const Layout: FC = ({ children }) => {
   return (
      <Container maxWidth="sm" disableGutters>
         <Navbar />
         {children}
      </Container>
   )
}
