'use client'

import React from 'react'

export const useLoginForm = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const writeEmail = React.useCallback((value: string) => {
    setEmail(value)
  }, [])

  const writePassword = React.useCallback((value: string) => {
    setPassword(value)
  }, [])

  return [email, writeEmail, password, writePassword] as const
}