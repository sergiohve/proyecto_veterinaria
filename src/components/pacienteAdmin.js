import React, { Component } from 'react';

import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
 

class PacienteAdmin extends Component {

    state={
        abierto: false,
      }
    
      abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
      }


    render() {
        const {edad, vacunas,enfermedades, remedios, foto} = this.props.info;
         
        const modalStyles={
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        return (
            <div>
            <div className="media mt-3">
                <div className="media-body">
                   
                    <p className="card-text"><span>Edad Mascota:</span> {edad}</p>
                    <p className="card-text"><span>Vacunas administradas:</span> {vacunas}</p>
                     <p className="card-text"><span>Enfermedades:</span>{enfermedades} </p>
                    <p className="card-text"><span>Remedios:</span>{remedios}</p>
                   
                    <button type="button" onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar</button>&nbsp;
                      <button type="button"  className="btn btn-primary"  onClick={this.abrirModal}>Actualizar </button>
                   
                </div>

                
            </div>

            <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
         Actualiza datos
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Vacunas</Label>
            <Input type="text" id="usuario"/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Enfermedades</Label>
            <Input type="text" id="password"/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Remedios</Label>
            <Input type="text" id="password"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
       
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
            <Button color="primary" onClick={this.abrirModal}>Guardar</Button>
        </ModalFooter>
      </Modal>
            </div>
           
        );
    }
    
}




export default PacienteAdmin;