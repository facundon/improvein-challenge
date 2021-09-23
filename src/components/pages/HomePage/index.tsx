import { useTitle } from "hookrouter"
import { useEffect } from "react"
import { useRequest } from "../../../hooks"
import { apiServices } from "../../../services"
import { Home } from "../../templates"

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
   useTitle("Home")

   const { run } = useRequest(apiServices.getBands)
   useEffect(() => {
      const start = async () => {
         const response = await run()
         console.log(response)
      }
      start()
   }, [])

   const message = <p>Home!!!</p>
   return <Home message={message} />
}

export default HomePage
