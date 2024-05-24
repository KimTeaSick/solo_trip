import { PropsWithChildren } from 'react'

import Footer from '../../components/layouts/Footer'
import styles from './layout.module.css'

type LoginLayoutProps = PropsWithChildren

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  )
}

export default LoginLayout