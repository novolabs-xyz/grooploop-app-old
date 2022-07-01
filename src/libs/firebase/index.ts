import { getApps, initializeApp } from 'firebase/app'
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   sendEmailVerification,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from 'firebase/auth'
import { createUserLocally } from 'services/user.services'

const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_MESSAGING_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   measurementId: process.env.MEASUREMENT_ID,
}

let firebaseApp

if (!getApps().length) {
   firebaseApp = initializeApp(firebaseConfig)
} else {
   firebaseApp = getApps()[0]
}
export const app = firebaseApp
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
   try {
      const result = await signInWithPopup(auth, googleProvider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const user = result.user
      if (user?.email && user?.displayName && user.photoURL)
         await createUserLocally(
            { email: user.email },
            { displayName: user.displayName, avatar: user.photoURL }
         )
      return { token, user }
   } catch (err: any) {
      console.error(err)
      throw new Error("Can't sign in with google")
   }
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
   try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { result }
   } catch (err: any) {
      console.error(err)
      throw new Error("Can't log in with email and password")
   }
}

const registerWithEmailAndPassword = async (
   email: string,
   password: string
) => {
   try {
      const { user } = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      )
      await sendEmailToVerifyAccount(user)
      if (user) await createUserLocally({ email }, { displayName: '' })
      return { user }
   } catch (err: any) {
      console.error(err)
      throw new Error("Can't register with email and password")
   }
}

const sendPasswordReset = async (email: string) => {
   try {
      await sendPasswordResetEmail(auth, email, {
         url: process.env.NEXT_PUBLIC_APP_URL + '/email-verified',
      })
      return { ok: true, error: { status: false, message: '' } }
   } catch (err: any) {
      console.error(err)
      throw new Error("Can't send password reset email")
   }
}

const logout = () => {
   signOut(auth)
}

const getCurrentUserToken = async () => {
   try {
      const token = await auth.currentUser?.getIdToken()
      return token
   } catch (error) {
      console.log(error)
      return null
   }
}

const getCurrentUser = async () => {
   try {
      const user = await auth.currentUser
      return user
   } catch (error) {
      console.log(error)
      return null
   }
}

const sendEmailToVerifyAccount = async (user: any) => {
   try {
      await sendEmailVerification(user, {
         url: process.env.NEXT_PUBLIC_APP_URL + '/email-verified',
      })
      return true
   } catch (err: any) {
      console.error(err)
      throw new Error("Can't send email to verify account")
   }
}

export {
   auth,
   signInWithGoogle,
   logInWithEmailAndPassword,
   registerWithEmailAndPassword,
   sendPasswordReset,
   logout,
   getCurrentUserToken,
   sendEmailToVerifyAccount,
   getCurrentUser,
}
