import React, { ChangeEvent } from 'react'
import { createPortal } from 'react-dom'

import LoginInput from '../LoginInput'
import LoginButton from '../LoginButton'
import { loginMutation } from '@/service/login'
import { useLoginForm } from '../hooks/useLoginForm'
import { useLoginPageStatus } from '@/module/login'
import LoginFailure from '../loginFailure'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const [email, writeEmail, password, writePassword, disabled] = useLoginForm()
  const { setPageStatus, modalStatus, setModalStatus } = useLoginPageStatus()
  const handleLogin = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const status = await loginMutation(email, password)
    if (!status) setModalStatus(true)
    setPageStatus(status)
  }
  return (
    <React.Fragment>
      {modalStatus && createPortal(<LoginFailure />, document.body)}
      <form className={styles.login} onSubmit={handleLogin} >
        <div className={styles.login_input_form}>
          <LoginInput label='이메일' text={email} setState={writeEmail} type={'text'} placeholder='이메일을 입력해 주세요' />
          <LoginInput label='비밀번호' text={password} setState={writePassword} type={'password'} placeholder='비밀번호를 입력해 주세요' autoComplete="on" />
        </div>
        <LoginButton title='로그인' disabled={disabled} />
      </form >
    </React.Fragment>
  )
}

export default LoginForm