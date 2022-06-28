export interface IAuthUser {
   id: string
   providerId?: string
   displayName?: string
   email: string
   photoURL?: string
   emailVerified?: boolean
   phoneNumber?: string
}
