'use client'
import React from 'react'
import { createPortal } from 'react-dom'

import SearchModal from './searchModal'
import SoloPlaceNote from './soloPlaceNote'
import VisiteSol from './visiteSol/VisiteSol'
import styles from './LogRegister.module.css'
import ImageArea from './imageArea/ImageArea'

import { useSearch } from '@/module/soloLogRegister'
import LogRegisterButton from './LogRegisterButton'

const LogRegister = () => {

  const modalStatus = useSearch((state) => (state.modalStatus))

  return (
    <div className={styles.log_register_container}>
      <ImageArea />
      <VisiteSol />
      <SoloPlaceNote />
      <LogRegisterButton />
      {modalStatus && createPortal(
        <SearchModal />,
        document.body
      )}
    </div>
  )
}

export default LogRegister