import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const Home = () => {
    const { currentUser, deleteAccount } = useAuthContext();

    const DeleteAccount = () => {
        deleteAccount('navlink-home')
    }
    return (
        <div>
            <p>WELCOME {currentUser.email}</p>
            <br /><br />
            <button className="btn btn-danger" onClick={DeleteAccount}>ELIMINAR CUENTA</button>
        </div>
    )
}

export default Home
