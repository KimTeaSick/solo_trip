'use client'
import React from 'react'

import Input from '@/components/common/Input/Input'
import styles from './Search.module.css'
import Search from '@/components/icons/Search'

import Clear from '@/components/icons/Clear'
import { useSearch } from '@/module/soloLogRegister'

const SearchInput = () => {
  const { searchKeyword, setSearchKeyword, status, setStatus } = useSearch()

  const clearHandler = () => {
    setSearchKeyword('')
  }

  React.useEffect(() => {
    if (searchKeyword.length !== 0) setStatus(true)
    else setStatus(false)
  }, [searchKeyword])

  return (
    <div className={styles.search_bar}>
      <Search status={status} style={{ width: '20px', height: '20px' }} />
      <Input className={styles.search_input} placeholder='플레이스명을 검색해 주세요' onChange={(e) => setSearchKeyword(e.target.value)} value={searchKeyword} />
      {status && <Clear onClick={clearHandler} />}
    </div>
  )
}

export default SearchInput