import RegisterPage from '@/containers/register-page'
import withAuth from './auth'

function Register() {
  return (
    <RegisterPage />
  )
}

export default withAuth(Register)