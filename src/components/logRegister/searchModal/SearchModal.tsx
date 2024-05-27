import React from 'react'

import SearchHeader from './SearchHeader'
import SearchInput from './SearchInput'
import styles from './Search.module.css'
import ModalButton from './ModalButton'

const SearchModal = () => {
  return (
    <div className={styles.search_modal_section}>
      <div className={styles.search_modal_container}>
        <SearchHeader />
        <SearchInput />
        <ModalButton />
      </div>
    </div>
  )
}

export default SearchModal