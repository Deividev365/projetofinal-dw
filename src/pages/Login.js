import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";


import '../styles/pages/login.css'

import logo from '../assets/logo.png'

export function Login() {
    return(
        <div className="App">
        
        <img src={logo} className="logo" alt="Business view - Reports" />

        <form className="form">

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email@gmail.com" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>


          <Link to="/app" className="primary">
              
                <p>ENTRAR</p> 

          </Link>
        
        </form>
        <Link to="/">
        <FiArrowLeft size={58}></FiArrowLeft>
        </Link>


        <Link to="/" className="secondary"> 

        </Link>


      </div>
    );
}

