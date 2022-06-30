import { AuthContext } from '@context/AuthContext'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

interface IProps {
   children: React.ReactNode
   redirectTo?: string
}
const GuestRoute: FC<IProps> = (props) => {
   const { children, redirectTo } = props
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

   if (currentUser) {
      router.replace(redirectTo ?? '/plans')
      return <></>
   } else {
      return <>{children}</>
   }
}

export default GuestRoute
