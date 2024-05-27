import React from 'react'

import Button from '@/components/common/Button/Button'
import styles from './Search.module.css'

const ModalButton = () => {
  return (
    <Button className={styles.modal_button}>
      <p className={styles.button_label}>새로운 솔플레이스 추가</p>
    </Button>
  )
}

export default ModalButton