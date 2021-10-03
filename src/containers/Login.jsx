import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext'
import LoginImg from "../assets/img/login.svg";
import LinearIndeterminate from "../components/LinearIndeterminate"

import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { logIn } = useAuthContext();
    const [hiddenButton, setHiddenButton] = useState(false)
    const [hiddenLoader, setHiddenLoader] = useState(true)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);    

    const ToastMessage = (message) => {    
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

    const Login = async () => {
      setHiddenButton(true)
      setHiddenLoader(false)
        if (email === "" || password === "") {
            ToastMessage("Por favor, llena todos los campos!")
            setHiddenButton(false)
            setHiddenLoader(true)            
        }else{
            await logIn(email, password)
            setTimeout(() => {
              setHiddenButton(false)
              setHiddenLoader(true) 
            }, 2600);
        }
    }  
   

    return (  
      <>    
      <div className="d-flex justify-content-center pt-5">
        <div style={{width: "80%"}}>          
          <div className="row">
            <section className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
              <img src={LoginImg} alt="Login Image" className="img-fluid" style={{width: 420, height: 400, objectFit: "contain"}} />
            </section>
            <section className="col-sm-12 col-md-6 col-lg-6 card-component background-primary">
              <br />              
                <section className="row d-flex justify-content-center">
                  <div class="col-sm-12 col-md-12 col-lg-10">
                    <div className="card pt-2 pb-2 background-primary">
                      <div className="card-body background-primary">
                        <h3 className="card-title text-white"><b>Bienvenido de nuevo! :&#41;</b></h3>
                        <br />
                          <div className="form-group d-flex justify-content-flex-start align-items-center pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-fill icon-component pr-2" viewBox="0 0 16 16">
                              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg>                       
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electrónico" onChange={handleEmail} />
                          </div>
                          <div className="form-group d-flex justify-content-flex-start align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-key-fill icon-component pr-2" viewBox="0 0 16 16">
                              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>        
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" onChange={handlePassword} />
                          </div>                           
                          <div style={{marginTop: -15}} className="d-flex justify-content-center pb-4">
                            <a href="#" className="text-white">Olvidé mi contraseña</a>                          
                          </div>                            
                          <div>
                            <button className="btn btn-water-light" hidden={hiddenButton} onClick={Login}>Ingresar</button>                            
                          </div>                          
                          <div hidden={hiddenLoader}>
                            <LinearIndeterminate />                            
                          </div>   
                          <br />                  
                          <section>                          
                            <div className="d-flex justify-content-flex-start">                            
                              <p className="text-white pr-1">Aún no tienes una cuenta?</p>
                                <Link to="/register" className="text-white">Registrarme</Link>                          
                            </div>                             
                          </section>                        
                      </div>
                    </div> 
                  </div>
              </section>          
            </section>
          </div>          
        </div>
      </div>
      <ToastContainer transition={Bounce}/>
      </>
    );
}

export default Login
