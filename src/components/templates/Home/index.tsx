import { Box, CircularProgress } from "@mui/material"
import { ReactElement } from "react"

export interface HomeProps {
   bandTable: ReactElement
   isLoading: boolean
   searchBar: ReactElement
}

const Home: React.FC<HomeProps> = ({ bandTable, isLoading, searchBar }) => {
   return (
      <Box display="flex" flexDirection="column" alignItems="center">
         {searchBar}
         {isLoading ? <CircularProgress /> : bandTable}
      </Box>
   )
}

export default Home
