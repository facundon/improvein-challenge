export type User = {
   name: string
   email: string
}

export type LoginInputs = {
   email: string
   password: string
}

export type UserContextType = {
   user: User | null
   login: (data: LoginInputs) => boolean
   logout: () => void
}
