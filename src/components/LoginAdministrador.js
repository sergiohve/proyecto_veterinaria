import React, { Component } from 'react';
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

class LoginAdministrador extends Component{
  state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    iniciarSesion= async(e)=>{
      
      e.preventDefault();
       await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
       
        .then(response=>{
            return response.data;
        })
        .then(response=>{
           if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="/DashboardAdministrador";
              
            }
            else{
                
                alert('El usuario o la contraseña no son correctos');
            }
        })
      .catch(()=>{
        alert("Usuario/Contraseña incorrectos");
      })


    }
 





render(){
  return (
   <div className="wrapper fadeInDown">
  <div id="formContent">
    
        <div className="fadeIn first">
         <h2>Login Administrador</h2>
        </div>
        
       
        <form onSubmit={this.onSubmit}>
          <input type="text"  className="fadeIn second" name="username" onChange={this.handleChange}  placeholder="Usuario"  required/>
          <input type="password"  className="fadeIn third" name="password" onChange={this.handleChange}  placeholder="Contraseña" required/><br/>
      <button className="btn btn-primary bt" onClick={this.iniciarSesion}>Ingresar</button>

      
        </form>

       
        <div id="formFooter">
          <a className="underlineHover" href="/LoginPaciente">Login Cliente</a>
        </div>

  </div>
</div>
  );
  
}
}

export default LoginAdministrador;