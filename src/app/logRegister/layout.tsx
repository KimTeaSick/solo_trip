import React, { PropsWithChildren } from 'react'

import styles from './layout.module.css'

type LogRegiterLayoutProps = PropsWithChildren

const LogRegiterLayout = ({ children }: LogRegiterLayoutProps) => {
  return (
    <div>
      <p className={styles.header}>솔플레이스 로그 등록</p>
      {children}
    </div>
  )
}

export default LogRegiterLayout