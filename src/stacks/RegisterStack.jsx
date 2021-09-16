import React from 'react'
import { Redirect } from "react-router-dom";

import UserExist from '../components/UserExist'
import Register from '../containers/Register'

const RegisterStack = () => {
    const userExist = UserExist();    
    return userExist ? 
      <Redirect to="/home" />
    : 
      <Register />
}

export default RegisterStack
