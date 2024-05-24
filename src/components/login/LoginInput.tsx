import React, { ComponentProps } from 'react'
import Input from '../headless/Input'

type Props = {
  label: string
  text: string
  type: 'text' | 'password'
  placeholder: string
  setState: (e: string) => void
} & ComponentProps<'input'>

const LoginInput = ({ label, text, type, placeholder, setState, ...rest }: Props) => {
  return (
    <div className='input-section'>
      <p className='label'>{label}</p>
      <Input text={text} type={type} placeholder={placeholder} setState={setState} >
        <Input.Body styles='login-input' {...rest} />
      </Input>
    </div>
  )
}
export default LoginInput