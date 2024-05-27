import React from 'react'

import Button from '../common/Button/Button'
import styles from './LogRegister.module.css'

const LogRegisterButton = () => {
  return (
    <Button className={styles.log_register_button}>
      <p>솔플레이스 로그등록</p>
    </Button>
  )
}

export default LogRegisterButton