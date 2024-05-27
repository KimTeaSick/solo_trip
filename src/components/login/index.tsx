'use client'

import React from 'react'

import LoginSuccess from './logSuccess/'
import { useLoginPageStatus } from '@/module/login'
import LoginForm from './loginForm'


const Login = () => {
  const { pageStatus } = useLoginPageStatus()
  return (
    <React.Fragment>
      {pageStatus === 0 ? (<LoginForm />) : (<LoginSuccess />)}
    </React.Fragment>
  )

}

export default Login

