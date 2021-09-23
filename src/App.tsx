import { useRoutes } from "hookrouter"
import { routes } from "./routes"
import { NotFoundPage } from "./components/pages"
import { Container, CssBaseline } from "@mui/material"

import { UserProvider } from "./context"

function App() {
   const match = useRoutes(routes)
   return (
      <UserProvider>
         <CssBaseline />
         <Container maxWidth="lg" className="container">
            {match || <NotFoundPage />}
         </Container>
      </UserProvider>
   )
}

export default App
