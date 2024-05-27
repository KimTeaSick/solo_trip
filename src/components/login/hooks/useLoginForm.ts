'use client'

import React from 'react'

export const useLoginForm = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)

  const writeEmail = React.useCallback((value: string) => {
    setEmail(value)
  }, [])

  const writePassword = React.useCallback((value: string) => {
    setPassword(value)
  }, [])

  React.useEffect(() => {
    if (email.length !== 0, password.length !== 0) setDisabled(false)
    else setDisabled(true)
  }, [email, password])

  return [email, writeEmail, password, writePassword, disabled] as const
}