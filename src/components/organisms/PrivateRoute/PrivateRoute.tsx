import { AuthContext } from '@context/AuthContext'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

interface IProps {
   children: React.ReactNode
   redirectTo?: string
}
const AuthRoute: FC<IProps> = (props) => {
   const { children, redirectTo } = props
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

   if (currentUser) {
      return <>{children}</>
   } else {
      router.replace(redirectTo ?? '/signin')
      return <></>
   }
}

export default AuthRoute
