import { IPlan } from './plans'

export interface IAuthUser {
   id: string
   providerId?: string
   displayName?: string
   email: string
   photoURL?: string
   emailVerified?: boolean
   phoneNumber?: string
}
export interface IUser {
   id?: string
   email: string
   plan?: IPlan
   allowNotifications?: boolean
}

export interface IProfile {
   id?: string
   displayName?: string
   sex?: string
   dateOfBirth?: Date
   country?: string
   avatar?: string
}
