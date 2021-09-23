import { Box } from "@mui/material"
import { BaseDialog } from "../../atoms"
import { EmailLogin } from "../../molecules"
export interface LoginPanelProps {
   open: boolean
   onClose: () => void
   onLoginSuccess: () => void
}

const LoginPanel: React.FC<LoginPanelProps> = ({
   open,
   onClose,
   onLoginSuccess,
}) => {
   const handleClose = () => {
      onClose()
   }

   return (
      <BaseDialog
         onClose={handleClose}
         backdropClose
         withCloseButton
         maxWidth="sm"
         open={open}
         fullWidth
         className="login"
      >
         (
         <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom={3}
         >
            <EmailLogin
               closeLogin={() => {
                  onClose()
                  onLoginSuccess()
               }}
            />
         </Box>
      </BaseDialog>
   )
}

export default LoginPanel
