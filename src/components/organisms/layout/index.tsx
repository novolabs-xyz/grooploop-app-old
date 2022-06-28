import { Navbar } from '@components/organisms/Navbar/Navbar'
import { FC } from 'react'

export const Layout: FC = ({ children }) => {
   return (
      <>
         <Navbar />
         {children}
      </>
   )
}
