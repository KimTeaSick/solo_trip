'use client'
import React from 'react'
import Image from 'next/image'

import Button from '@/components/common/Button/Button'
import IMG_URL from '../../../../public/plus_20.png'
import styles from './PhotoButton.module.css'
import { useSolPhoto } from '@/module/soloLogRegister'



const PhotoButton = () => {
  const inputRef = React.useRef<any>(null)
  const photoAdd = useSolPhoto((state) => (state.photoAdd))

  const getPath = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(inputRef.current.files[0]);
    reader.onloadend = function (event: ProgressEvent<FileReader>) {
      photoAdd(event.target?.result)
    }
  }

  return (
    <React.Fragment>
      <input type="file" style={{ display: 'none' }} accept="image/*" required multiple ref={inputRef} onChange={(e) => getPath(e)} />
      <Button className={styles.photo_button} onClick={() => { inputRef.current.click() }} >
        <Image src={IMG_URL} width={24} height={24} alt='' />
        <p className={styles.button_title}>사진 등록</p>
      </Button>
    </React.Fragment>
  )
}

export default PhotoButton