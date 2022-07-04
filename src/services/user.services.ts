import axios from 'axios'
import { IProfile, IUser } from 'interfaces/user'

export const createUserLocally = async (user: IUser, profile: IProfile) => {
   try {
      const { data } = await axios.post(
         `${process.env.NEXT_PUBLIC_API_URL}/users`,
         { user, profile }
      )
      return data
   } catch (error: any) {
      console.error(error)
      return { ok: false, error: { status: true, message: error.message } }
   }
}
