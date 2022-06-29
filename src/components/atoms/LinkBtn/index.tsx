import { Button as MUIButton } from '@mui/material'
import NextLink from 'next/link'
import { FC } from 'react'

interface IProps {
   href: string
   as?: string
   children: React.ReactNode
   variant?: 'contained' | 'outlined' | 'text'
   color?: 'primary' | 'secondary' | 'inherit'
   size?: 'small' | 'medium' | 'large'
   disabled?: boolean
   fullWidth?: boolean
   endIcon?: React.ReactNode
   startIcon?: React.ReactNode
   onClick?: () => void
}

const LinkBtn: FC<IProps> = (props) => {
   const { children, href, ...rest } = props
   return (
      <NextLink href={href} passHref>
         <MUIButton {...rest}>{children}</MUIButton>
      </NextLink>
   )
}

export default LinkBtn
