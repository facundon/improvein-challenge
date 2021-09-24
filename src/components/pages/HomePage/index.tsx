import { useTitle } from "hookrouter"
import { useEffect } from "react"
import { useBands, useUser } from "../../../hooks"
import { ErrorMsg } from "../../atoms"
import { BandTable } from "../../molecules"
import { Home } from "../../templates"

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
   useTitle("Home")
   const { bands, getBands } = useBands()
   const { user } = useUser()

   useEffect(() => {
      if (!user) return
      getBands.run()
   }, [])

   const bandTable = bands ? (
      <BandTable bands={bands} />
   ) : (
      <ErrorMsg msg={getBands.error!} />
   )

   return user ? (
      <Home bandTable={bandTable} isLoading={getBands.isLoading} />
   ) : (
      <h3>You must be Loged in to see the table</h3>
   )
}

export default HomePage
