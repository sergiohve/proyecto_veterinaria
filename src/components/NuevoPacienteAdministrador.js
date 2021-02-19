import React, { Component } from 'react';


class NuevoPacienteAdministrador extends Component {
    

    enfermedadesRef = React.createRef();
   
    enfermedadesRef = React.createRef();
    remediosRef= React.createRef();

    crearNuevaCita = (e) => {
        e.preventDefault();

        //Crear el objeto
        const nuevaCita = {
            
            vacunas: this.enfermedadesRef.current.value,
            
            enfermedades: this.enfermedadesRef.current.value,
            remedios: this.remediosRef.current.value,
          
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
                                <input ref={this.vacunasref}  className="form-control"  required/>
                            </div>
                        </div>

                        

                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Diagnostico de enfermedades</label>
                            <div className="col-sm-9 col-lg-12">
                                <textarea ref={this.enfermedadesRef} className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Receta de algun medicamento</label>
                            <div className="col-sm-9 col-lg-12">
                                <textarea ref={this.remediosRef}  className="form-control"  required></textarea>
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