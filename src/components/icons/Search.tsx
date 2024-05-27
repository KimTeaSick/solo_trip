import React, { ComponentProps } from 'react'
import Image from 'next/image'

import IMG_URL_DIS from '../../../public/search_disabled.png'
import IMG_URL_EN from '../../../public/search_enable.png'



type Props = Omit<ComponentProps<typeof Image>, 'src' | 'alt'> & { status: boolean }

const Search = (props: Props) => {
  return (
    <Image src={props.status ? IMG_URL_EN : IMG_URL_DIS} alt='Search' {...props} />
  )
}

export default Search