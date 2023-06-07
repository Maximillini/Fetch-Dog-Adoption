import { Input } from '../../shared/Input'
import './index.scss'

export const LoginForm = () => {
  return (
    <div className="login-form">
      <Input label="Username" />
      <Input label="Password" type="password" />
    </div>
  )
}
