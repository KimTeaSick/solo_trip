import React, { createContext, useContext } from "react"
import Image, { StaticImageData } from "next/image"

type ButtonContextType = {
  title: string
  disabled: boolean
  event: () => void
}

type ButtonType = ButtonContextType & React.PropsWithChildren<{}>

const ButtonContext = createContext({
  title: '',
  disabled: false,
  event: () => { }
})

const useButtonContext = () => {
  const context = useContext(ButtonContext)
  return context
}

const Button = ({ title, event, disabled, children }: ButtonType) => {
  const value = { title, event, disabled }
  return (
    <ButtonContext.Provider value={value}  >
      {children}
    </ButtonContext.Provider>
  )
}

const Body = ({ styles, children }: { styles: string, children: React.ReactNode }) => {
  const { disabled, event } = useButtonContext()
  return (
    <button
      className={styles}
      disabled={disabled}
      onClick={event}
      type="submit"
    >
      {children}
    </button>
  )
}

const Label = () => {
  const { title } = useButtonContext()
  return (
    <p>{title}</p>
  )
}

const Logo = ({ logo }: { logo: StaticImageData }) => {
  return (
    <Image src={logo} alt='...' />
  )
}

Button.Body = Body
Button.Label = Label
Button.Logo = Logo

export default Button