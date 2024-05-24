import { PropsWithChildren } from 'react'

import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import styles from './layout.module.css'

type LoginLayoutProps = PropsWithChildren

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default LoginLayout