import React, { Component } from 'react';
import Paciente from './Paciente';


class ListaPaciente extends Component {
    

    
    render() {

        const citas = this.props.citas;
        const mensajes = Object.keys(citas).length === 0 ? "Ningun paciente registrado" : "Pacientes:";

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensajes}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                          <Paciente idCita={cita} key={cita} info={this.props.citas[cita]} borrarCita={this.props.borrarCita} />  
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}



export default ListaPaciente;