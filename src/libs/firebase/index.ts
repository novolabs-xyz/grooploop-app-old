import { getApps, initializeApp } from 'firebase/app'
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from 'firebase/auth'

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
}
export const app = firebaseApp
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
   try {
      await signInWithPopup(auth, googleProvider)
      return { ok: true, error: { status: false, message: '' } }
   } catch (err: any) {
      console.error(err)
      return { ok: false, error: { status: true, message: err.message } }
   }
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
   try {
      await signInWithEmailAndPassword(auth, email, password)
      return { ok: true, error: { status: false, message: '' } }
   } catch (err: any) {
      console.error(err)
      return { ok: false, error: { status: true, message: err.message } }
   }
}

const registerWithEmailAndPassword = async (
   email: string,
   password: string
) => {
   try {
      await createUserWithEmailAndPassword(auth, email, password)
      return { ok: true, error: { status: false, message: '' } }
   } catch (err: any) {
      console.error(err)
      return { ok: false, error: { status: true, message: err.message } }
   }
}

const sendPasswordReset = async (email: string) => {
   try {
      await sendPasswordResetEmail(auth, email)
      alert('Password reset link sent!')
      return { ok: true, error: { status: false, message: '' } }
   } catch (err: any) {
      console.error(err)
      return { ok: false, error: { status: true, message: err.message } }
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
}
