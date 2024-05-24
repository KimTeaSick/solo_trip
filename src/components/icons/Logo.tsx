import React, { ComponentProps } from 'react'
import Image from 'next/image'

import IMG_URL from '../../../public/logo.png'

type Props = Omit<ComponentProps<typeof Image>, 'src' | 'alt'>

const Logo = (props: Props) => {
  return (
    <Image src={IMG_URL} alt='logo' {...props} />
  )
}

export default Logo