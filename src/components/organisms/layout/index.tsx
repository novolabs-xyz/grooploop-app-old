import Container from '@mui/material/Container'
import { FC } from 'react'

export const Layout: FC = ({ children }) => {
   return (
      <Container maxWidth="sm" disableGutters>
         {children}
      </Container>
   )
}
