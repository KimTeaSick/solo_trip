'use client'

import React from 'react'
import Image from 'next/image'

import { useSolPhoto } from '@/module/soloLogRegister'
import styles from './ImageArea.module.css'
import PhotoButton from '../photoButton/PhotoButton'

const ImageArea = () => {
  const photoList = useSolPhoto((state) => (state.photoList))
  return (
    <div className={styles.image_container}>
      <PhotoButton />
      {photoList.map((v) => (
        <Image className={styles.image_card} src={v} width={102} height={102} alt='' />
      ))}
    </div>
  )
}

export default ImageArea