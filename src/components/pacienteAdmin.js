import React, { Component } from 'react';


class PacienteAdmin extends Component {

    render() {
        const {nombreMascota,edad, vacunas,enfermedades, remedios, foto} = this.props.info;

        return (
            <div className="media mt-3">
                <div className="media-body">
                   
                    <p className="card-text"><span>Edad Mascota:</span> {edad}</p>
                    <p className="card-text"><span>Vacunas administradas:</span> {vacunas}</p>
                     <p className="card-text"><span>Enfermedades:</span>{enfermedades} </p>
                    <p className="card-text"><span>Remedios:</span>{remedios}</p>
                   
                    <button type="button" onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar</button>&nbsp;
                      <button type="button" onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-primary">Actualizar </button>
                   
                </div>
            </div>
        );
        
    }
}




export default PacienteAdmin;