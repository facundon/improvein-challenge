import { CircularProgress } from "@mui/material"
import { useTitle } from "hookrouter"
import { useEffect } from "react"
import { useRequest } from "../../../hooks"
import useBands from "../../../hooks/useBands"
import { apiServices } from "../../../services"
import { ErrorMsg } from "../../atoms"
import { BandTable } from "../../molecules"
import { Home } from "../../templates"

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
   useTitle("Home")
   const { bands, getBands } = useBands()

   useEffect(() => {
      getBands.run()
   }, [])

   const bandTable = bands ? (
      <BandTable bands={bands} />
   ) : (
      <ErrorMsg msg={getBands.error!} />
   )

   return getBands.isLoading ? (
      <CircularProgress />
   ) : (
      <Home bandTable={bandTable} />
   )
}

export default HomePage
