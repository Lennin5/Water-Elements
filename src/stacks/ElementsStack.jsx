import React from 'react'
import { Redirect } from "react-router-dom";

import UserExist from '../components/UserExist';
import Elements from "../containers/Elements"

const ElementsStack = () => {
    const userExist = UserExist();
    return (        
        userExist ?
        <Elements />
        :
        <Redirect to="/login" />
    )
}

export default ElementsStack;
