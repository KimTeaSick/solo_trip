import React, { ComponentProps } from 'react'
import Image from 'next/image'

import IMG_URL from '../../../public/bell.png'

type Props = Omit<ComponentProps<typeof Image>, 'src' | 'alt'>

const Bell = (props: Props) => {
  return (
    <Image src={IMG_URL} alt='bell' {...props} />
  )
}

export default Bell