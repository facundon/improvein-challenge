import { FunctionComponent } from "react"
import { EmailLogin } from "../../molecules"
import { Login } from "../../templates"

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
   const form = <EmailLogin />
   return <Login form={form} />
}

export default LoginPage
