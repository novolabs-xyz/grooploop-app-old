import Button from '@mui/lab/LoadingButton'
import { FC, ReactNode } from 'react'
import { colors } from 'styles/theme/colors'

interface IProps {
   onClick?: () => void
   children: ReactNode
   type?: 'submit' | 'button'
   size?: 'small' | 'medium' | 'large'
   fullWidth?: boolean
   disabled?: boolean
   loading?: boolean
}
export const GradientBtn: FC<IProps> = (props) => {
   const { children, disabled, ...rest } = props

   return (
      <Button
         disabled={disabled}
         {...rest}
         sx={{
            background: !disabled
               ? 'linear-gradient(90deg, #00CFE6 0%, #00B3C7 100%)'
               : colors.textDisabledColor,
            borderRadius: 2,
            mt: 3,
            mb: 2,
            p: 2,
            color: '#fff',
         }}
      >
         {children}
      </Button>
   )
}
