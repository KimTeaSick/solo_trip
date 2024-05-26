import React from 'react'
import PlaceCard from './PlaceCard'

import styles from './PlaceCard.module.css'

const PlaceCardList = ({ list }) => {
  return (
    <div className={styles.list}>
      {
        list.map(({ id, images, solplaceName, introduction }) => (
          <PlaceCard key={id} images={images} solplaceName={solplaceName} introduction={introduction} />
        ))
      }
    </div>
  )
}

export default PlaceCardList