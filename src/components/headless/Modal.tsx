import React, { ReactNode, useContext } from "react"

type ModalContextType = {
  title: string
  content: React.JSX.Element
  modalState: boolean
  closeButton: boolean
}

type ModalType = ModalContextType & React.PropsWithChildren

const ModalContext = React.createContext({
  title: '',
  content: <></>,
  modalState: false,
  closeButton: false
})

const useModalContext = () => {
  const context = useContext(ModalContext)
  return context
}

const ModalProvider = ({ title, content, modalState, closeButton, children }: ModalType) => {
  const value = { title, content, modalState, closeButton }
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

const ModalContent = () => {
  const { content } = useModalContext()
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

ModalProvider.Content = ModalContent

export default ModalProvider