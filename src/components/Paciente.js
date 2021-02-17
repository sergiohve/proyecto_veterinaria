import React, { Component } from 'react';


class Paciente extends Component {

    render() {
        const {nombreMascota,edad, vacunas,enfermedades, remedios, foto} = this.props.info;

        
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Edad Mascota:</span> {edad}</p>
                    <p className="card-text"><span>Vacunas administradas:</span> {vacunas}</p>
                     <p className="card-text"><span>Enfermedades:</span>{enfermedades} </p>
                    <p className="card-text"><span>Remedios:</span>{remedios}</p>
                    <p className="card-text"><span>Foto:</span><img src={foto}/></p>
                    <button type="button" onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar &times;</button>
                   
                </div>
            </div>
        );
    }
}




export default Paciente;