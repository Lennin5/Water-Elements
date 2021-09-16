import '../assets/css/Navbar.css';
import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Logo from "../assets/img/logo.png"
import UserExist from './UserExist';

const Navbar = () => {  

  const userExist = UserExist();

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });    
  }, []);

  return (
    
  <nav className="navbar navbar-expand-lg navbar-mainbg pt-1">
    
      <Link to='#' className="pl-1 navbar-brand navbar-brand-logo-light" style={{ marginTop: -1, fontWeight: "bold", fontSize: 25,}}>
        <img src={Logo} width="60" height="47" style={{ marginTop: -4 }} alt="Logo Water Meter" /> 
        <b>Water Elements</b>        
      </Link>      
                
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto" hidden={userExist ? "true" : "false"}>
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>            


            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <div className="div__navbar--icon">
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-house-fill pr-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                  </section>
                  <section>Inicio</section>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/elements">
                <div className="div__navbar--icon">
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-droplet-half pr-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                      <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                    </svg>
                  </section>
                  <section>Elementos</section>
                </div>
              </Link> 
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/graphics">
                <div className="div__navbar--icon">
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-bar-chart-line-fill pr-2" viewBox="0 0 16 16">
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                    </svg>
                  </section>
                  <section>Gráficos</section>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <div className="div__navbar--icon">
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-info-circle-fill pr-2" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </section>
                  <section>Acerca De</section>
                </div>
              </Link>
            </li>

            <li className="nav-item">            
              <Link className="nav-link" to="#" onClick={()=>console.log("Close Sesion")}>
                <div className="div__navbar--icon">
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-in-right pr-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                  </section>
                  <section>Cerrar Sesión</section>
                </div>
              </Link>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;