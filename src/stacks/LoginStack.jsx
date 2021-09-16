import React from 'react'
import { Redirect } from "react-router-dom";

import UserExist from '../components/UserExist'
import Login from '../containers/Login'

const LoginStack = () => {
    const userExist = UserExist();    
    return userExist ? 
      <Redirect to="/home" />
    : 
      <Login />
}

export default LoginStack
