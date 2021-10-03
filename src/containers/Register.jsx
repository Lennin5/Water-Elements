import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import RegisterImg from "../assets/img/register.svg";
import LinearIndeterminate from "../components/LinearIndeterminate"

import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const { signUp } = useAuthContext();

    const ToastMessage = (message) => {    
            if(message === "Se ha creado la cuenta!"){
            toast.success(message, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,  
            });;  
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

    const [hiddenButton, setHiddenButton] = useState(false)
    const [hiddenLoader, setHiddenLoader] = useState(true)

    const [establishmentName, setEstablishmentName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleEstablishmentName = e => setEstablishmentName(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleConfirmPassword = e => setRepeatPassword(e.target.value);    

    const Register = async () => {    
        setHiddenButton(true)
        setHiddenLoader(false)            
        if (establishmentName === "" || email === "" || password === "" || repeatPassword === "") {
            ToastMessage("Por favor, llena todos los campos!")
            setHiddenButton(false)
            setHiddenLoader(true)
        }else if(password !== repeatPassword){
            ToastMessage("Las contraseñas no coinciden!")
            setHiddenButton(false)
            setHiddenLoader(true)            
        }else if(password === "123456"){
            ToastMessage("Contraseña vulnerable, intenta de nuevo!")
            setHiddenButton(false)
            setHiddenLoader(true)            
        }
        else{
            await signUp(establishmentName, email, password)
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
              <img src={RegisterImg} alt="Register Image" className="img-fluid" style={{width: 420, height: 400, objectFit: "contain"}} />
            </section>
            <section className="col-sm-12 col-md-6 col-lg-6 card-component background-primary">
              <br />              
                <section className="row d-flex justify-content-center">
                  <div class="col-sm-12 col-md-12 col-lg-10">
                    <div className="card pt-2 pb-2 background-primary">
                      <div className="card-body background-primary">
                        <h3 className="card-title text-white"><b>Registra tu entrada al beta! :&#41;</b></h3>
                        <br />
                          <div className="form-group d-flex justify-content-flex-start align-items-center pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-door-fill icon-component pr-2" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                            </svg>                             
                            <input type="text" class="form-control" placeholder="Establecimiento" onChange={handleEstablishmentName} />                            
                          </div>                        
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
                          <div className="form-group d-flex justify-content-flex-start align-items-center">       
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-repeat icon-component pr-2" viewBox="0 0 16 16">
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                            </svg>                            
                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirmar Contraseña" onChange={handleConfirmPassword} />
                          </div>   
                          <div>
                            <button className="btn btn-water-light" hidden={hiddenButton} onClick={Register}>Registrarme</button>
                          </div>                                                                       
                          <div hidden={hiddenLoader}>
                            <LinearIndeterminate />
                          </div>  
                          <br />
                          <section>
                            <div className="d-flex justify-content-flex-start">
                              <p className="text-white pr-1">Ya tienes una cuenta?</p>
                                <Link to="/login" className="text-white">Ingresar</Link>                          
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
    )
}

export default Register
