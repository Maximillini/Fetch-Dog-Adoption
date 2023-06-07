import './index.scss'

type InputProps = {
  label: string,
  type?: 'text' | 'number' | 'password' | 'radio' | 'checkbox' | 'search' | 'email'
}

export const Input = ({ label, type='text' }: InputProps) => {
  return (
    <div className="input">
      <label htmlFor="username">{label}</label>
      <input id="username" name="username" type={type} />
    </div>
  )
}
