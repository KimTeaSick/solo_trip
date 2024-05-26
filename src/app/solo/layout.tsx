import { PropsWithChildren } from 'react'

import Footer from '../../components/layouts/Footer'
import styles from './layout.module.css'

type SoloLayoutProps = PropsWithChildren

function SoloLayout({ children }: SoloLayoutProps) {
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  )
}

export default SoloLayout