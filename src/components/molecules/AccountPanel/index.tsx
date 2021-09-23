import { Button, DialogActions, Divider, Typography } from "@mui/material"
import { ExitToApp } from "@mui/icons-material"
import { FunctionComponent } from "react"
import { BaseDialog } from "../../atoms"

import "./index.scss"
import { User } from "../../../@types"
interface AccountPanelProps {
   open: boolean
   onClose: () => void
   onLogout: () => void
   user: User
}

const AccountPanel: FunctionComponent<AccountPanelProps> = ({
   open,
   onClose,
   onLogout,
   user,
}) => (
   <BaseDialog
      onClose={onClose}
      backdropClose
      withCloseButton
      title={`Hello ${user.name}`}
      maxWidth="sm"
      open={open}
      fullWidth
      className="account-panel"
   >
      <Typography variant="h6" align="center">
         Email: {user.email}
      </Typography>
      <Divider style={{ margin: "1em 0 2em 0" }} />
      <DialogActions
         style={{
            marginTop: "1em",
            display: "flex",
            justifyContent: "space-between",
         }}
      >
         <Button
            variant="contained"
            color="secondary"
            startIcon={<ExitToApp />}
            onClick={() => {
               onClose()
               onLogout()
            }}
         >
            Logout
         </Button>
      </DialogActions>
   </BaseDialog>
)

export default AccountPanel
