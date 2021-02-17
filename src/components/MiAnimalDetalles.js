import React, { Component } from 'react';


class MiAnimalDetalles extends Component {
    
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
                    <h2 className="card-title text-center mb-5">Mi animal:</h2>
                    <form onSubmit={this.crearNuevaCita}>
                       
                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Edad</label>
                            <div className="col-sm-12 col-lg-12">
                                <input ref={this.edadRef} type="number" placeholder="Edad" className="form-control" required/>
                            </div>

                           
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Vacunas que se han administrado</label>
                            <div className="col-sm-8 col-lg-12">
                                <input ref={this.vacunasref} type="text" className="form-control"  placeholder="Vacunas"/>
                            </div>
                        </div>

                        

                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Enfermedades que ha tenido</label>
                            <div className="col-sm-9 col-lg-12">
                                <textarea ref={this.enfermedadesRef} placeholder="Enfermedades" className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Remedios consumidos</label>
                            <div className="col-sm-9 col-lg-12">
                                <textarea ref={this.remediosRef}  className="form-control" placeholder="Remedios" required></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-8 col-lg-12 col-form-label">Foto del Animal</label>
                            <div className="col-sm-9 col-lg-12">
                               <input type="file" ref={this.fotoRef}  className="form-control" placeholder="Foto" required/>
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



export default MiAnimalDetalles;