import React from 'react'
import { Redirect } from "react-router-dom";

import UserExist from '../components/UserExist';
import Graphics from "../containers/Graphics"

const GraphicsStack = () => {
    const userExist = UserExist();
    return (        
        userExist ?
        <Graphics />
        :
        <Redirect to="/login" />
    )
}

export default GraphicsStack;
