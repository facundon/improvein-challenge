import { Box, Typography, Button } from "@mui/material"
import { FunctionComponent, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import LoadingOverlay from "react-loading-overlay"
import { FormInput } from "../../atoms"
import { rules } from "./rules"

import { LoginInputs } from "../../../@types"
import { navigate } from "hookrouter"
import { useUser } from "../../../hooks"
interface EmailLoginProps {}

const EmailLogin: FunctionComponent<EmailLoginProps> = () => {
   const defaultValues: LoginInputs = {
      email: "",
      password: "",
   }
   const { handleSubmit, control, setError } = useForm({
      defaultValues,
   })
   const { user, login } = useUser()

   useEffect(() => {
      if (user) navigate("/")
   }, [])

   const onSubmit: SubmitHandler<LoginInputs> = data => {
      const success = login(data)
      if (!success) {
         return setError(
            "password",
            { message: "Email or Password is incorrect" },
            { shouldFocus: true }
         )
      }
      navigate("/")
   }

   return (
      <LoadingOverlay
         styles={{ wrapper: s => ({ ...s, width: "100%" }) }}
         spinner
         fadeSpeed={200}
      >
         <form style={{ width: "inherit" }} onSubmit={handleSubmit(onSubmit)}>
            <Box
               width="75%"
               display="flex"
               alignSelf="center"
               flexDirection="column"
               justifyContent="center"
               margin="auto"
            >
               <Typography
                  variant="h5"
                  style={{
                     alignSelf: "flex-start",
                     fontWeight: "bold",
                     marginBottom: "1em",
                  }}
                  gutterBottom
               >
                  Sign in
               </Typography>
               <FormInput
                  name="email"
                  label="Email"
                  control={control}
                  rules={rules.email}
               />
               <FormInput
                  name="password"
                  label="Password"
                  control={control}
                  rules={rules.password}
               />
               <Box
                  display="flex"
                  justifyContent="flex-end"
                  marginTop={5}
                  width="95%"
               >
                  <Button variant="contained" type="submit">
                     Sign in
                  </Button>
               </Box>
            </Box>
         </form>
      </LoadingOverlay>
   )
}

export default EmailLogin
