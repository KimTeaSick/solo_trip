import React, { ComponentProps } from 'react'
import Image from 'next/image'

import IMG_URL from '../../../public/clear_icon.png'

type Props = Omit<ComponentProps<typeof Image>, 'src' | 'alt'>

const Clear = (props: Props) => {
  return (
    <Image src={IMG_URL} alt='clear' {...props} />
  )
}

export default Clear