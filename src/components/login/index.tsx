'use client'

import React, { ChangeEvent } from 'react'

import './index.css'
import LoginInput from './LoginInput'
import LoginButton from './LoginButton'
import { useLoginForm } from './hooks/useLoginForm'
import { loginMutation } from '@/service/login'
import LoginSuccess from './LoginSuccess'
import LoginFailure from './LoginFailure'
import { useLoginPageStatus } from '@/module/login'

const LoginForm = () => {
  const [email, writeEmail, password, writePassword] = useLoginForm()
  const status = useLoginPageStatus((state) => (state.status))
  const setStatus = useLoginPageStatus((state) => (state.setStatus))
  const handleLogin = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const status = await loginMutation(email, password)
    console.log(status);

    setStatus(status)
  }
  return (
    <div className='container'>
      {
        status === 0 ? (
          < form className='login' onSubmit={handleLogin} >
            <div className='login-input-form'>
              <LoginInput label='이메일' text={email} setState={writeEmail} type={'text'} placeholder='이메일을 입력해 주세요' />
              <LoginInput label='비밀번호' text={password} setState={writePassword} type={'password'} placeholder='비밀번호를 입력해 주세요' autoComplete="on" />
            </div>
            <LoginButton title='로그인' disabled={false} />
          </form >
        ) : status === 1 ? (
          <LoginSuccess />
        ) : (
          <LoginFailure />
        )}
    </div>
  )
}

export default LoginForm