import { useContext } from "react"
import { UserContextType } from "../@types"
import { UserContext } from "../context/UserContext"

const useUser = () => {
   const userContext = useContext(UserContext) as UserContextType
   if (Object.keys(UserContext).length === 0) {
      throw Error("useUser must be used inside its provider")
   }

   return userContext
}

export default useUser
