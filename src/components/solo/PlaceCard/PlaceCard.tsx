import React from 'react'
import Image from 'next/image'

import styles from './PlaceCard.module.css'

type Props = {
  images: string
  solplaceName: string
  introduction: string
}

const getImages = (images) => {
  const image = JSON.parse(images)
  return image[0]
}
const PlaceCard = ({ images, solplaceName, introduction }: Props) => {
  return (
    <div className={styles.placecard}>
      <Image src={getImages(images)} width={154} height={231} alt='' />
      <p className={styles.solplaceName}>{solplaceName}</p>
      <p className={styles.introduction}>{introduction}</p>
    </div>
  )
}

export default PlaceCard