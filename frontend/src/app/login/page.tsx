import LoginPage from "@/containers/login-page"
import withAuth from "./auth"

function Login() {
  return (
    <LoginPage />
  )
}

export default withAuth(Login)