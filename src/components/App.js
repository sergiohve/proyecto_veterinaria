import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas: {}
  }

  //como el document ready
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
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Pacientes de Veterinaria" />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
