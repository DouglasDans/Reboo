import RegisterPage from '@/containers/register-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Registrar",
}

function Register() {
  return (
    <RegisterPage />
  )
}

export default Register