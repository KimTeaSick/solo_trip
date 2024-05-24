import style from './Header.module.css'
import Bell from '../../icons/Bell'
import Logo from '../../icons/Logo'

function Header() {
  return (
    <div className={style.header}>
      <Logo />
      <Bell />
    </div>
  )
}

export default Header