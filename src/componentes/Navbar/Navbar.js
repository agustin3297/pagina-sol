import React from 'react';
import Nb from './Navbar.css';

function Navbar () {
  return(
     <> 
  <nav className="navbar navbar-expand-lg sticky-top">

        <div className="container-fluid">
          
            <div>
              <a className="navbar-brand" href="/">M. Sol Vassia</a>
            </div>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="menu">

              <div className="navbar-nav container-fluid">
                <ul className='container-fluid d-lg-flex d-block m-0 justify-content-end'>
                  <li><a className="nav-link active" aria-current="page" href="/#servicios">Servicios</a></li>
                  <li><a className="nav-link" href="/#sobre-mi">Sobre mi</a></li>
                  <li><a className="nav-link" href="/escritos">Escritos</a></li>
                  <li><a className="nav-link" href="/#contacto">Contacto</a></li>
                </ul>
              </div>

            </div>
          
        </div>
  </nav>
     </> 
  )
};

export default Navbar;