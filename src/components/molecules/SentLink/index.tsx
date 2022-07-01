import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Envelop from 'components/atoms/icons/Envelop'
import { TitleAndSubtitle } from 'components/atoms/TitleAndSubtitle'
import { FC } from 'react'

interface IProps {
   handleSendEmail: () => void
   title: string
   subtitle: string
   disabledBtn: boolean
}

const SentLink: FC<IProps> = (props) => {
   const { handleSendEmail, title, subtitle, disabledBtn } = props

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 68px)',
         }}
      >
         <Envelop />
         <TitleAndSubtitle title={title} subtitle={subtitle} />
         <Box sx={{ margin: '1.5rem' }}>
            <Typography variant="body1" align="center" gutterBottom>
               ¿No te ha llegado el link?
            </Typography>
            <Button
               color="inherit"
               onClick={handleSendEmail}
               disabled={disabledBtn}
            >
               volver a enviar el link
            </Button>
         </Box>
         {disabledBtn && (
            <Typography variant="caption" paragraph align="center">
               Link enviado. Podras intentar nuevamente en 5 minutos.
            </Typography>
         )}
      </Box>
   )
}

export default SentLink
