import LoginPage from "@/containers/login-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
}

function Login() {
  return (
    <LoginPage />
  )
}

export default Login