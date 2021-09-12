import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../FirebaseC';
import { Auth } from '@firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    const [loading, setLoading] = useState(true)

    function signup (email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(()=>{
        const unsuscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsuscribe

    }, [])
    
    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
