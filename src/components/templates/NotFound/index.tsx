import { Box } from "@mui/material"
import { ReactElement } from "react"

import "./index.scss"
export interface NotFoundProps {
   message: ReactElement
}

const NotFound: React.FC<NotFoundProps> = ({ message }) => {
   return (
      <Box display="flex" justifyContent="center" className="not-found-wrapper">
         {message}
      </Box>
   )
}

export default NotFound
