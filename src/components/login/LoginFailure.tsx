import React from 'react'
import Button from '../common/Button/Button'
import { useLoginPageStatus } from '@/module/login'

const LoginFailure = () => {
  const setStatus = useLoginPageStatus((state) => (state.setStatus))
  return (
    <div>
      잘못된 로그인 정보입니다.
      <Button className='login-button' title='다시 확인하기' onClick={() => setStatus(0)}>
        <p>{'다시 확인하기'}</p>
      </Button>
    </div>
  )
}

export default LoginFailure