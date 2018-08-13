import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {
    render() {
        const {nombreMascota,nombreDueno,fecha,hora,sintomas} = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Nombre Dueño:</span> {nombreDueno}</p>
                    <p className="card-text"><span>Fecha:</span> {fecha}</p>
                    <p className="card-text"><span>Hora:</span> {hora}</p>
                    <p className="card-text"><span>Sintomas:</span><br/> 
                        {sintomas}
                    </p>
                    <button type="button" onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar &times;</button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    borrarCita: PropTypes.func.isRequired,
    info: PropTypes.shape({
        nombreMascota: PropTypes.string.isRequired,
        nombreDueno: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired
    })
}

export default Cita;