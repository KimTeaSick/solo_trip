import React from 'react'
import Button from '../headless/Button'

type Props = {
  title: string
  event?: () => void
  disabled: boolean
}

const LoginButton = ({ title, event, disabled }: Props) => {
  return (
    <Button title={title} event={event ?? console.log} disabled={disabled}>
      <Button.Body styles={[disabled && 'disabled', 'login-button'].join(' ')}>
        <Button.Label />
      </Button.Body>
    </Button>
  )
}

export default LoginButton