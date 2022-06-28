import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
   IconButton,
   InputAdornment,
   TextField,
   Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'

interface PasswordInputProps {
   label?: string
   errorMessage?: string
   hasError?: boolean
   // eslint-disable-next-line no-unused-vars
   setHasError?: (hasError: boolean) => void
   // eslint-disable-next-line no-unused-vars
   setPassword: (password: string) => void
   password: string
   checksEnabled?: boolean
}

const has8CharactersOrMore = (password: string) => password.length >= 8
const hasUpperCase = (password: string): boolean =>
   password !== password.toLowerCase()
const hasNumber = (password: string) => /\d/.test(password)

const isPasswordValid = (password: string) =>
   has8CharactersOrMore(password) &&
   hasUpperCase(password) &&
   hasNumber(password)

const PasswordInput = ({
   label = 'Contraseña',
   errorMessage,
   hasError,
   setHasError,
   password,
   setPassword,
   checksEnabled = true,
}: PasswordInputProps) => {
   const showError = password !== '' && hasError
   const [showpw, setShowpw] = useState<boolean>(false)
   useEffect(() => {
      if (checksEnabled && setHasError) {
         if (hasError && isPasswordValid(password)) setHasError(false)
         else if (!hasError && !isPasswordValid(password)) setHasError(true)
      }
   }, [password])

   return (
      <>
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={showError}
            label={label}
            type={showpw ? 'text' : 'password'}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
               // <-- This is where the toggle button is added.
               endAdornment: (
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                           setShowpw(!showpw)
                        }}
                        onMouseDown={() => {}}
                     >
                        {!showpw ? <Visibility /> : <VisibilityOff />}
                     </IconButton>
                  </InputAdornment>
               ),
            }}
         />
         {showError ? (
            <Typography variant="body2" color="primary">
               {errorMessage ?? 'Contraseña incorrecta'}
            </Typography>
         ) : (
            <></>
         )}
      </>
   )
}

export default PasswordInput
