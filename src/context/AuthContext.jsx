import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import firebase from "firebase";
import { auth, database } from '../utils/FirebaseConfiguration';

import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// useContext para poder acceder a los metodos desde cualquier componente
const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const history = useHistory();

  // Metodo Observador de usuario activo en sistema
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, [])  
  
  const ToastMessage = (message) => {
    if(message === "Se ha creado la cuenta exitosamente!"){
      toast.success(message, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,  
      });
    }else{
      toast.error(message, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,                    
      });;  
    }
  }     

  // Metodo de registro
  const signUp = (establishmentName, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
    .then(response => {                  
          let uid = response.user.uid;
          database.ref('users/'+uid+'/main_data').set({
          establishmentName: establishmentName,
          email: email,   
          // Timestamp: firebase.database.ServerValue.TIMESTAMP,
      }).then(async response=>{                      
          await history.push("/");
          await ToastMessage("Se ha creado la cuenta exitosamente!");           
      }).catch(error =>{
          var errorMessage = error.code;
          ToastMessage("DB "+errorMessage);
      });        
    })
    .catch(error => {      
      var errorMessage = error.code;
      ToastMessage("AUTH: "+errorMessage);
    })
  }

  // Metodo de login
  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
    .then(response =>{
      history.push("/");
    }).catch(error =>{
      var errorMessage = error.code;
      var errorMessage2 = error.message;
      ToastMessage(errorMessage);
      console.log(errorMessage2);
    })    
  }

  // Metodo de cerrar sesión
  const logOut = async (id) => {
    await auth.signOut();    
    setTimeout(() => {
      document.getElementById(id).click()  
    }, 2000);
  }

  // Metodo de eliminar cuenta
  const deleteAccount = async (id) => {
    const user = auth.currentUser;
    const uid = auth.currentUser.uid;
    await user.delete()
    .then(() => {
      database.ref('users/'+uid).remove()
      ToastMessage("Se ha eliminado la cuenta!")
      setTimeout(() => {        
        document.getElementById(id).click()  
      }, 2000);      
    }).catch((error) => {
      ToastMessage(error)
    });   
  }  

  const methods = {
    currentUser,
    signUp,
    logIn,
    logOut,
    deleteAccount
  };
  return (
    <>      
      <AuthContext.Provider value={methods}>
        {props.children}
      </AuthContext.Provider>
      <ToastContainer transition={Bounce} />
    </>
  );
}

export default AuthProvider