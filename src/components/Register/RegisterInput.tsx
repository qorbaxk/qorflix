import { ChangeEvent } from 'react'

interface InputProps {
  id: string
  name: string
  type: string
  value: string
  placeholder: string
  required: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RegisterInput = ({
  id = '',
  name = '',
  type = '',
  value = '',
  placeholder = '',
  required,
  onChange,
}: InputProps) => {
  return (
    <div className="w-96 h-12 text-center">
      <label htmlFor={id} />
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full h-full text-sm text-black pl-2"
      />
    </div>
  )
}

export default RegisterInput
