import React from 'react'

import styles from './SoloPlaceNote.module.css'
const placeholder = '취향에 맞는 장소였나요? 공간의 분위기, 꿀팁 등 혼자 방문하기 좋은 이유를 기록해 보세요'

const SoloPlaceInput = () => {
  return (
    <textarea className={styles.solo_place_input} placeholder={placeholder} />
  )
}

export default SoloPlaceInput