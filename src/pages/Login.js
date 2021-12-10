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
            <input required type="password" name="password" />
          </div>

          <Link to="/WeatherApp" className="primary">
                <span>LOGIN</span> 
          </Link>
        
        </form>

                
        <Link to="/">
          <FiArrowLeft className="back-home" size={50}></FiArrowLeft>
        </Link>


      </div>
    );
}

