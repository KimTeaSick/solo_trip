import React, { ComponentProps } from 'react'

type InputType = ComponentProps<'input'>

const Input = (props: InputType) => {
  return (
    <input {...props} />
  )
}

export default Input