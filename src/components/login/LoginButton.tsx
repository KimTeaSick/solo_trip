import React from 'react'
import Button from '../headless/Button'
import styles from './Login.module.css'
type Props = {
  title: string
  event?: () => void
  disabled: boolean
}

const LoginButton = ({ title, event, disabled }: Props) => {
  return (
    <Button title={title} event={event ?? console.log} disabled={disabled}>
      <Button.Body styles={[disabled && styles.disabled, styles.login_button].join(' ')}>
        <Button.Label />
      </Button.Body>
    </Button>
  )
}

export default LoginButton