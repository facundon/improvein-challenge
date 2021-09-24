import { Paper } from "@mui/material"
import { FunctionComponent, ReactElement } from "react"

interface LoginProps {
   form: ReactElement
}

const Login: FunctionComponent<LoginProps> = ({ form }) => {
   return (
      <Paper elevation={6} style={{ padding: "4em 0" }}>
         {form}
      </Paper>
   )
}

export default Login
