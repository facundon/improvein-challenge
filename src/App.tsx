import { useRoutes } from "hookrouter"
import { routes } from "./routes"
import { NotFoundPage } from "./components/pages"
import { Container, CssBaseline } from "@mui/material"

import { UserProvider } from "./context"
import { NavBar } from "./components/organisms"
import { Box } from "@mui/system"

function App() {
   const match = useRoutes(routes)
   return (
      <UserProvider>
         <CssBaseline />
         <NavBar />
         <Container maxWidth="lg">
            <Box width="100%" marginTop="3em">
               {match || <NotFoundPage />}
            </Box>
         </Container>
      </UserProvider>
   )
}

export default App
