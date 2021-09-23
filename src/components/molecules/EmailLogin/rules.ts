import { RegisterOptions } from "react-hook-form"
import { LoginInputs } from "../../../@types"
import { EMAIL_REGEX } from "../../../utils/text"

export const rules: Record<
   keyof LoginInputs,
   Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
   >
> = {
   email: {
      required: "Email is required",
      pattern: {
         value: EMAIL_REGEX,
         message: "Please enter a valid email",
      },
   },
   password: {
      required: "Password is required",
      minLength: {
         value: 6,
         message: `Password must have at least 6 characters`,
      },
   },
}
