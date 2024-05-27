import React from 'react'

import SoloPlaceInput from './SoloPlaceInput'
import styles from './SoloPlaceNote.module.css'

const SoloPlaceNote = () => {
  return (
    <div>
      <p className={styles.container_title}>솔플노트</p>
      <SoloPlaceInput />
    </div>
  )
}

export default SoloPlaceNote