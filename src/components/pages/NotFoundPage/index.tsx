import { Typography } from "@mui/material"
import { useTitle } from "hookrouter"
import { NotFound } from "../../templates"

export interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
   useTitle("Not Found")
   const message = (
      <Typography component="h3" variant="h4">
         Oops...that page does not exist
      </Typography>
   )
   return <NotFound message={message} />
}

export default NotFoundPage
