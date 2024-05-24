'use client'

import { useRouter } from 'next/navigation'

import HOME_ABLE from '../../../../public/home_able.png'
import HOME_DISABLE from '../../../../public/home_disable.png'
import SOLO_ABLE from '../../../../public/solo_able.png'
import SOLO_DISABLE from '../../../../public/solo_disable.png'
import FooterButton from '../FooterButton'
import styles from './Footer.module.css'


const Footer = () => {
  const router = useRouter()


  const handleMoveToTestPage = () => {
    router.push("/test")
  }

  const handleMoveToLoginPage = () => {
    router.push("/login")
  }

  return (
    <footer className={styles.footer}>
      <FooterButton
        title='홈'
        disabledIcon={HOME_ABLE}
        enabledIcon={HOME_DISABLE}
        enabled={false}
        onClick={handleMoveToLoginPage}
      />
      <FooterButton
        title='솔로플레이스'
        disabledIcon={SOLO_ABLE}
        enabledIcon={SOLO_DISABLE}
        enabled={false}
        onClick={handleMoveToTestPage}
      />
    </footer>
  )
}

export default Footer