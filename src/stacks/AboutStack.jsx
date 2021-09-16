import React from 'react'
import { Redirect } from "react-router-dom";

import UserExist from '../components/UserExist';
import About from "../containers/About"

const AboutStack = () => {
    const userExist = UserExist();
    return (        
        userExist ?
        <About />
        :
        <Redirect to="/login" />
    )
}

export default AboutStack;
