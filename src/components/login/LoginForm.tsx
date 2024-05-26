import React from 'react'
import LoginInput from './LoginInput'
import LoginButton from './LoginButton'

const LoginForm = () => {
  return (
    < form className='login' onSubmit={handleLogin} >
      <div className='login-input-form'>
        <LoginInput label='이메일' text={email} setState={writeEmail} type={'text'} placeholder='이메일을 입력해 주세요' />
        <LoginInput label='비밀번호' text={password} setState={writePassword} type={'password'} placeholder='비밀번호를 입력해 주세요' autoComplete="on" />
      </div>
      <LoginButton title='로그인' disabled={false} />
    </form >
  )
}

export default LoginForm