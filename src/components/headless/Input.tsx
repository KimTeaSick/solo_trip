import { createContext, useContext } from "react"

type InputContextType = {
  text: string
  placeholder: string
  type: 'text' | 'password' | 'number'
  setState: (e: string) => void
}

type InputType = InputContextType & React.PropsWithChildren<{}>

const InputContext = createContext({
  text: '',
  placeholder: '',
  type: 'text',
  setState: (e: string) => { }
})

const useInputContext = () => {
  const context = useContext(InputContext)
  return context
}

const Input = ({ text, placeholder, type, setState, children }: InputType) => {
  const value = { text, placeholder, type, setState }
  return (
    <InputContext.Provider value={value} >
      {children}
    </InputContext.Provider >
  )
}

const Body = ({ styles, ...rest }: { styles: string }) => {
  const { text, placeholder, type, setState } = useInputContext()
  return (
    <input
      className={styles}
      value={text}
      type={type}
      placeholder={placeholder}
      onChange={(e) => { setState(e.target.value) }}
      {...rest}
    />
  )
}

Input.Body = Body

export default Input