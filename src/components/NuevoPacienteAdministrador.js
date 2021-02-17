import React, { Component } from 'react';


class NuevoPacienteAdministrador extends Component {
    
    nombreMascotaRef = React.createRef();
    enfermedadesRef = React.createRef();
    edadRef = React.createRef();
    horaRef = React.createRef();
    enfermedadesRef = React.createRef();
    remediosRef= React.createRef();
    fotoRef= React.createRef();
    crearNuevaCita = (e) => {
        e.preventDefault();

        //Crear el objeto
        const nuevaCita = {
            nombreMascota: this.nombreMascotaRef.current.value,
            vacunas: this.enfermedadesRef.current.value,
            edad: this.edadRef.current.value,
            enfermedades: this.enfermedadesRef.current.value,
            remedios: this.remediosRef.current.value,
            foto:this.fotoRef.current.value,
        }

        this.props.crearCita(nuevaCita);
        e.currentTarget.reset();
    }
    
    render() {
        return(
        <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Nuevo paciente aqui:</h2>
                    <form onSubmit={this.crearNuevaCita}>
                     <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Vacunas que se le va a administrar</label>
                            <div className="col-sm-8 col-lg-12">
                                <input ref={this.vacunasref} type="text" className="form-control"  placeholder="Vacunas"/>
                            </div>
                        </div>

                        

                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Diagnostico de enfermedades</label>
                            <div className="col-sm-9 col-lg-12">
                                <textarea ref={this.enfermedadesRef} placeholder="Enfermedades" className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Receta de algun medicamento</label>
                            <div className="col-sm-9 col-lg-12">
                                <textarea ref={this.remediosRef}  className="form-control" placeholder="Remedios" required></textarea>
                            </div>
                        </div>
                       
              
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
        )
    }
}



export default NuevoPacienteAdministrador;