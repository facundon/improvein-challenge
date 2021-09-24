import { CircularProgress } from "@mui/material"
import { ReactElement } from "react"

export interface HomeProps {
   bandTable: ReactElement
   isLoading: boolean
}

const Home: React.FC<HomeProps> = ({ bandTable, isLoading }) => {
   return isLoading ? <CircularProgress /> : bandTable
}

export default Home
