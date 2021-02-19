import React, { Component } from 'react';
import Header from './Header';
import MiAnimalDetalles from './MiAnimalDetalles';
import ListaPaciente from './ListaPaciente';

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
  }
 

  render() {
    return (
      <div className="container">
   
        <Header titulo="Clinica veterinaria Dog Lovers" />

         <h3 style={{color: "white", marginTop: "20px"}}>Bienvenida Leidys Velasquez</h3>
        <div className="row">
          <div className="col-md-6">
            <MiAnimalDetalles crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaPaciente citas={this.state.citas} borrarCita={this.borrarCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardAdministrador;
