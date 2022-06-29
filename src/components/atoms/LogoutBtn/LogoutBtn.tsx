import { logout } from '@libs/firebase'
import { Button } from '@mui/material'

export const LogOutBtn = () => {
   return <Button onClick={logout}>LogOut</Button>
}
