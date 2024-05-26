import React, { ReactNode, useContext } from "react"

type ModalContextType = {
  title: string
  modalState: boolean
  closeButton: boolean
}

type ModalType = ModalContextType & React.PropsWithChildren

const ModalContext = React.createContext({
  title: '',
  modalState: false,
  closeButton: false
})

const useModalContext = () => {
  const context = useContext(ModalContext)
  return context
}

const ModalProvider = ({ title, modalState, closeButton, children }: ModalType) => {
  const value = { title, modalState, closeButton }
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

const ModalContent = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

ModalProvider.Content = ModalContent

export default ModalProvider