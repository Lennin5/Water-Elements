import React from 'react';
import { Link } from "react-router-dom";

import NotFoundImg from "../assets/img/linde.jpg";

const NotFound = () => {
    return (
    <>    
    <section className="not__found">    
        <img src={NotFoundImg}  alt="Not Found Image" style={{width: 420, height: 400}} />
        <Link to='/'>
        <div className="btn btn-water">Volver A Inicio</div>
        </Link>
        <br/>
        <br/>        
    </section>    
    <br/>
    </>
    )
}

export default NotFound;