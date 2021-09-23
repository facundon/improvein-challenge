import { useState, useMemo, createContext } from "react"
import { User } from "../@types"

export const UserContext = createContext({})

const UserProvider: React.FC = ({ children }) => {
   const [user, setUser] = useState<User | null>(null)

   const providerUser = useMemo(
      () => ({
         user,
      }),
      [user]
   )

   return (
      <UserContext.Provider value={providerUser}>
         {children}
      </UserContext.Provider>
   )
}

export default UserProvider
