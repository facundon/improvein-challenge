import { useState, useMemo, createContext, useCallback } from "react"
import { LoginInputs, User } from "../@types"
import { TEST_USER } from "../config/app"

export const UserContext = createContext({})

export interface UserProviderProps {}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null)

   const login = useCallback((data: LoginInputs) => {
      if (
         data.email !== TEST_USER.email ||
         data.password !== TEST_USER.password
      ) {
         setUser(null)
         return false
      }
      setUser({ email: TEST_USER.email, name: TEST_USER.name })
      return true
   }, [])

   const logout = () => setUser(null)

   const providerUser = useMemo(
      () => ({
         user,
         login,
         logout,
      }),
      [user, login]
   )

   return (
      <UserContext.Provider value={providerUser}>
         {children}
      </UserContext.Provider>
   )
}

export default UserProvider
