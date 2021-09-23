import { Box, Typography, Button, Link } from "@mui/material"
import { FunctionComponent, MouseEventHandler, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import LoadingOverlay from "react-loading-overlay"
import { FormInput } from "../../atoms"
import { rules } from "./rules"

import { LoginInputs } from "../../../@types"
interface EmailLoginProps {
   closeLogin: () => void
}

const EmailLogin: FunctionComponent<EmailLoginProps> = ({ closeLogin }) => {
   const defaultValues: LoginInputs = {
      email: "",
      password: "",
   }
   const { handleSubmit, control, setError } = useForm({
      defaultValues,
   })

   const onSubmit: SubmitHandler<LoginInputs> = async data => {
      // const result = await login.run(data)
      // if (!result)
      //    return setError(
      //       "password",
      //       { message: "Password is incorrect" },
      //       { shouldFocus: true }
      //    )
      // closeLogin()
   }

   return (
      <LoadingOverlay
         styles={{ wrapper: s => ({ width: "100%" }) }}
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
            </Box>
            <Box
               display="flex"
               justifyContent="space-between"
               marginTop={5}
               width="95%"
               style={{ float: "right" }}
            >
               <Button variant="contained" type="submit">
                  Sign in
               </Button>
            </Box>
         </form>
      </LoadingOverlay>
   )
}

export default EmailLogin
