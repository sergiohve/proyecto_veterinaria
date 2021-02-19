import React, { Component } from 'react';
import Header from './Header';
import NuevoPacienteAdministrador from './NuevoPacienteAdministrador';
import ListaPacienteAdmin from './ListaPacienteAdmin';
//cookies
import Cookies from "universal-cookie";

const cookies = new Cookies();

class DashboardAdministrador extends Component {

  state = {
    citas: {}
  }

  

  

  
  componentDidMount(){
   
   
    
    const citasLS = localStorage.getItem('citas');
    
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  // cuando hay un cambio en el state
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearCita = (nuevaCita) => {

    const cita = {...this.state.citas}

    cita[`citas${Date.now()}`] = nuevaCita;

    this.setState({
        citas: cita
    });
  }

  borrarCita = (id) => {
    //leer el state
    const citas = {...this.state.citas};

    //borrarlo del state
    delete citas[id];
    
    //actualizar state
    this.setState({
      citas:citas
    });
    console.log(this.props.citas)
  }

  
 
 
 
  render() {
        
        
       

    return (
      <div className="container">
      
   
        <Header titulo="Clinica veterinaria Dog Lovers" />
         <h3 style={{color: "white", marginTop: "20px"}}>Bienvenido Sergio Herrera</h3>
        <div className="row">
         
          <div className="col-md-6">
            <ListaPacienteAdmin citas={this.state.citas} borrarCita={this.borrarCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardAdministrador;
