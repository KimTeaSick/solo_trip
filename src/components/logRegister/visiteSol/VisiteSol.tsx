import React from 'react'
import Image from 'next/image'

import Button from '@/components/common/Button/Button'
import styles from './VisiteSol.module.css'
import IMG_URL from '../../../../public/right_arrow.png'

const VisiteSol = () => {
  return (
    <div>
      <p>다녀온 솔플레이스</p>
      <Button className={styles.visite_sol_button}>
        <p className={styles.title}>솔플레이스를 선택해 주세요.</p>
        <Image src={IMG_URL} width={4} height={9} alt='' />
      </Button>
    </div>
  )
}

export default VisiteSol