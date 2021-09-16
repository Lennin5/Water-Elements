import React from 'react'
import UserExist from '../components/UserExist'

import HomeStack from './HomeStack';
import LoginStack from './LoginStack'

const Index = () => {
    const userExist = UserExist();
    return (        
        userExist ?            
        <HomeStack />
        :
        <LoginStack />    
    )
}

export default Index
