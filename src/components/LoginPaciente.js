import React from 'react';
import { Link } from "react-router-dom";
//css
import "../css/login.css";

//Servicios de peticion
import { Apirest } from "../services/Apirest";

//axios
import axios from "axios";
//Encriptacion md5
import md5 from "md5";
//cookies
import Cookies from "universal-cookie";



const baseUrl= "http://localhost:3001/usuarios";
const cookies = new Cookies();




export default function LoginPaciente() {
  
  
  

  return (
   <div className="wrapper fadeInDown">
  <div id="formContent">
    
        <div className="fadeIn first">
         <h2>Login Cliente</h2>
        </div>

       
        <form>
          <input type="text"  className="fadeIn second" name="login" placeholder="Usuario"/>
          <input type="password"  className="fadeIn third" name="login" placeholder="Contraseña"/>
         <Link to="/DashboardPaciente"> <input type="submit" className="fadeIn fourth" value="Ingresar"/></Link>
        </form>

       
        <div id="formFooter">
          <a className="underlineHover" href="/">Login Administrador</a>
        </div>

  </div>
</div>
  );
}