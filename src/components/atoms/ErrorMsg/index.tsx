import { Typography } from "@mui/material"
import { FunctionComponent } from "react"

interface ErrorMsgProps {
   msg: string
}

const ErrorMsg: FunctionComponent<ErrorMsgProps> = ({ msg }) => {
   return (
      <Typography variant="h5" color="error" textAlign="center">
         {msg}
      </Typography>
   )
}

export default ErrorMsg
