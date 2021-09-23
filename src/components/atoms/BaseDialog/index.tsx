import {
   Box,
   Button,
   ButtonProps,
   Dialog,
   DialogActions,
   DialogContent,
   DialogProps,
   DialogTitle,
   IconButton,
   Typography,
} from "@mui/material"
import { Close } from "@mui/icons-material"

export interface BaseDialogProps extends DialogProps {
   open: boolean
   title?: string
   withActions?: boolean
   withCloseButton?: boolean
   backdropClose?: boolean
   actionText?: string
   id?: string
   maxWidth?: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined
   actionProps?: ButtonProps
   onClose: () => void
   onConfirm?: () => void
}

const BaseDialog: React.FC<BaseDialogProps> = ({
   title,
   open,
   children,
   onClose,
   onConfirm,
   actionProps,
   id,
   withCloseButton = false,
   withActions = false,
   backdropClose = false,
   actionText = "Save",
   maxWidth = "lg",
   ...rest
}) => (
      <Dialog
         maxWidth={maxWidth}
         open={open}
         onClose={() => backdropClose && onClose()}
         {...rest}
      >
         {title && (
            <DialogTitle>
               <Box
                  display="flex"
                  justifyContent={
                     title && withCloseButton
                        ? "space-between"
                        : withCloseButton
                        ? "flex-end"
                        : "flex-start"
                  }
               >
                  <Typography variant="h5" style={{ alignSelf: "center" }}>
                     {title}
                  </Typography>
                  {withCloseButton && (
                     <IconButton onClick={onClose}>
                        <Close />
                     </IconButton>
                  )}
               </Box>
            </DialogTitle>
         )}
         <DialogContent dividers id={id}>
            {!title && withCloseButton && (
               <IconButton onClick={onClose} style={{ float: "right" }}>
                  <Close />
               </IconButton>
            )}

              {children}
            
         </DialogContent>
         {withActions && (
            <DialogActions>
               <Button onClick={onClose} color="primary" variant="text">
                  Cancel
               </Button>
               <Button
                  {...actionProps}
                  autoFocus
                  onClick={onConfirm}
                  color="primary"
                  variant="contained"
               >
                  {actionText}
               </Button>
            </DialogActions>
         )}
      </Dialog>
   )

export default BaseDialog
