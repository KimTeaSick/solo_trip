import React, { ComponentProps } from 'react'

import Input from '../headless/Input'
import styles from './Login.module.css'

type Props = {
  label: string
  text: string
  type: 'text' | 'password'
  placeholder: string
  setState: (e: string) => void
} & ComponentProps<'input'>

const LoginInput = ({ label, text, type, placeholder, setState, ...rest }: Props) => {
  return (
    <div className={styles.input_section}>
      <p className={styles.label}>{label}</p>
      <Input text={text} type={type} placeholder={placeholder} setState={setState} >
        <Input.Body styles={styles.login_input} {...rest} />
      </Input>
    </div>
  )
}
export default LoginInput