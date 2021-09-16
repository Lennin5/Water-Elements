import React from 'react'
import { Redirect } from "react-router-dom";

import UserExist from '../components/UserExist';
import Home from "../containers/Home"

const HomeStack = () => {
    const userExist = UserExist();
    return (        
        userExist ?
        <Home />
        :
        <Redirect to="/login" />
    )
}

export default HomeStack;
