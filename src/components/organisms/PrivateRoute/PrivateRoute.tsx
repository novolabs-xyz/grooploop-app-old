import { AuthContext } from '@context/AuthContext'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

const AuthRoute: FC = ({ children }) => {
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

   if (currentUser) {
      return <>{children}</>
   } else {
      router.replace('/signin')
      return <></>
   }
}

export default AuthRoute
