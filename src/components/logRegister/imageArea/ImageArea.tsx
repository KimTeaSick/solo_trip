'use client'

import React from 'react'
import Image from 'next/image'

import { useSolPhoto } from '@/module/soloLogRegister'
import PhotoButton from '../photoButton/PhotoButton'
import styles from './ImageArea.module.css'

const ImageArea = () => {
  const photoList = useSolPhoto((state) => (state.photoList))

  return (
    <div className={styles.container}>
      <p className={styles.container_title}>{`솔플레이스 사진 ${photoList.length}/5`}</p>
      <div className={styles.image_container}>
        <PhotoButton />
        {photoList.map((v) => (
          <Image key={v} className={styles.image_card} src={v} width={102} height={102} alt='' />
        ))}
      </div>
    </div>
  )
}

export default ImageArea