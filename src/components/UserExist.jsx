import React, { useEffect, useState } from 'react'
import { auth } from '../utils/FirebaseConfiguration';

const UserExist = () => {
    const [userExist, setUserExist] = useState(false);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        !user ? setUserExist(false) : setUserExist(true);        
      });
    }, []);

	if (userExist === true) {
		return true;
	} else
	if (userExist === false) {
		return false;
	}
}

export default UserExist