import React from 'react'

import styles from './Search.module.css'
import Image from 'next/image'
import IMG_URL from '../../../../public/close.png'
import { useSearch } from '@/module/soloLogRegister'

const SearchHeader = () => {
  const setModalStatus = useSearch((state) => (state.setModalStatus))
  const onClickEnventHandler = () => {
    setModalStatus(false)
  }
  return (
    <div className={styles.search_header}>
      <p className={styles.search_header_title}>솔플레이스 검색</p>
      <Image src={IMG_URL} width={16} height={16} alt='' onClick={onClickEnventHandler} />
    </div>
  )
}

export default SearchHeader