import React from 'react';
import { Link } from "react-router-dom";

import NotFoundImg from "../assets/img/not_found.png";

const NotFound = () => {
    return (
    <>    
    <section className="not__found">    
        <br/>
        <img src={NotFoundImg} alt="Not Found Image" style={{width: 420, height: 400, objectFit: "contain", marginBottom: -90}} />
        <p class="font-weight-normal" style={{fontSize: 25, marginBottom: 30}}>Página no encontada!</p>
        <Link to='/'>
        <div className="btn btn-water">Volver A Inicio</div>
        </Link>        
        <br/>        
    </section>    
    <br/>
    </>
    )
}

export default NotFound;