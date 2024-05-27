import React from 'react'

import Button from '../../common/Button/Button'
import { useLoginPageStatus } from '@/module/login'
import styles from './LoginFailure.module.css'

const LoginFailure = () => {
  const setModalStatus = useLoginPageStatus((state) => (state.setModalStatus))
  return (
    <div className={styles.login_failure_container}>
      <div className={styles.login_failure_modal}>
        <p className={styles.login_failure_title}>잘못된 로그인 정보입니다.</p>
        <Button className={styles.login_button} title='다시 확인하기' onClick={() => setModalStatus(false)}>
          <p>{'다시 확인하기'}</p>
        </Button>
      </div>
    </div>
  )
}

export default LoginFailure