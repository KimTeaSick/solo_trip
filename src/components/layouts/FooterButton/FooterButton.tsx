'use client'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { ComponentProps } from 'react'

import Button from '../../common/Button'
import styles from './FooterButton.module.css'


type Props = {
  title: string
  enabled: boolean
  disabledIcon: StaticImageData
  enabledIcon: StaticImageData
} & ComponentProps<typeof Button>

function FooterButton({ title, disabledIcon, enabledIcon, className, enabled, ...rest }: Props) {
  return (
    <Button className={styles.footer_button} {...rest}>
      <Image src={enabled ? enabledIcon : disabledIcon} alt={title} />
      <p>{title}</p>
    </Button>
  )
}

export default FooterButton