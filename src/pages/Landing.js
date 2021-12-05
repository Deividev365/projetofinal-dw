import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/landing.css'

import logoImg from '../assets/logo.png'

export function Landing() {

    return(
        
    <div id="page-landing">


      <div className="content-wrapper">
          <img src={logoImg} alt="logo-happy"/>


          <main>
              <h1>Nunca foi tão fácil ver o tempo.</h1>
              <p>Consulte a temperatura em qualquer lugar do planeta.</p>
          </main>

            <div className="button-wrapper">


            <Link className="entrar" to="/login">
                ENTRAR
            </Link>

            </div>
       


          

      </div>


    </div>

    )
}

