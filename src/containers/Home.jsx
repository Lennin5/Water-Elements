import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import Demoline from '../components/charts/Demoline'
import Vaso from '../components/charts/Vaso'

const Home = () => {
    const { currentUser, deleteAccount } = useAuthContext();
    const Datos = [
        {
            Id: 0,
            Nombre: 'Agua de Rio',
            Ph: 2,
            Densidad: 10,
            Temperatura: 15
        },
        {
            Id: 2,
            Nombre: 'Agua de Mar',
            Ph: 4,
            Densidad: 8,
            Temperatura: 20
        },
        {
            Id: 3,
            Nombre: 'Agua de cristal',
            Ph: 0,
            Densidad: 3,
            Temperatura: 9
        },
        {
            Id: 4,
            Nombre: 'Agua de lago',
            Ph: 15,
            Densidad: 20,
            Temperatura: 2
        },
        {
            Id: 5,
            Nombre: 'Agua de laguna',
            Ph: 8,
            Densidad: 1,
            Temperatura: 25
        },
        {
            Id: 6,
            Nombre: 'Agua de vaso',
            Ph: 1,
            Densidad: 10,
            Temperatura: 15
        }
    ];

    const DeleteAccount = () => {
        deleteAccount('navlink-home')
    }
    const fo = () =>{
      console.log("fo")
      document.getElementById("test").classList.add("lol");
      document.getElementById("test2").classList.add("lol2");
    }
    return (
      <div>
        {/* <p>WELCOME {currentUser.email}</p>
        <br />        
        <button className="btn btn-danger" onClick={DeleteAccount}>
          ELIMINAR CUENTA
        </button> */}
        {/* <button onClick={fo}>
          Click
        </button> */}

        <center>
        <div style={{width: "90%"}}>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-sm-10 col-md-6 col-lg-3">
              <section class="card card-reveal">
              <h5 className="mt-3" style={{marginBottom: -30}}>Agua De Mar</h5>
                <div class="card-img-top">
                  <Vaso percentage={0.75} />  
                </div>
                <div class="card-body">
                  <div class="card-title text-white float-left">
                    <button type="button" class="btn btn-light float-left mb-2">
                      Nombre <span class="badge badge-dark">Agua De Playa xd</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Ph <span class="badge badge-dark">300</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Densidad <span class="badge badge-dark">50</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left">
                      Temperatura <span class="badge badge-dark">8700</span>
                    </button>                                                              
                  </div>
                </div>             
              </section>                
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3">
              <section class="card card-reveal">
              <h5 className="mt-3" style={{marginBottom: -30}}>Agua De Rio</h5>
                <div class="card-img-top">
                <Vaso percentage={0.65} />  
                </div>
                <div class="card-body">
                  <div class="card-title text-white float-left">
                    <button type="button" class="btn btn-light float-left mb-2">
                      Nombre <span class="badge badge-dark">Agua De Rio</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Ph <span class="badge badge-dark">300</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Densidad <span class="badge badge-dark">50</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left">
                      Temperatura <span class="badge badge-dark">8700</span>
                    </button>                                                              
                  </div>
                </div>
              </section>                
            </div>




          
            <div className="col-sm-10 col-md-6 col-lg-3">
              <section class="card card-reveal">
              <h5 className="mt-3" style={{marginBottom: -30}}>Agua De Playa</h5>
                <div class="card-img-top">
                <Vaso percentage={0.70} />  
                </div>
                <div class="card-body">
                  <div class="card-title text-white float-left">
                    <button type="button" class="btn btn-light float-left mb-2">
                      Nombre <span class="badge badge-dark">Agua De Playa xd</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Ph <span class="badge badge-dark">300</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Densidad <span class="badge badge-dark">50</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left">
                      Temperatura <span class="badge badge-dark">8700</span>
                    </button>                                                              
                  </div>
                </div>
              </section>                
            </div>


            <div className="col-sm-10 col-md-6 col-lg-3">
              <section class="card card-reveal">
              <h5 className="mt-3" style={{marginBottom: -30}}>Agua Contaminada</h5>
                <div class="card-img-top">
                <Vaso percentage={0.80} />  
                </div>
                <div class="card-body">
                  <div class="card-title text-white float-left">
                    <button type="button" class="btn btn-light float-left mb-2">
                      Nombre <span class="badge badge-dark">Agua De Playa xd</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Ph <span class="badge badge-dark">300</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left mb-2">
                      Densidad <span class="badge badge-dark">50</span>
                    </button><br />
                    <button type="button" class="btn btn-light float-left">
                      Temperatura <span class="badge badge-dark">8700</span>
                    </button>                                                              
                  </div>
                </div>
              </section>                
            </div>                                                           
          </div>
        </div>
        </center>

        <br /><br /><br /><br /><br />


      </div>

    );
}

export default Home
