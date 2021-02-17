import React from 'react';
import { Switch, Route } from "react-router-dom";
import  DashboardAdministrador  from "./components/DashboardAdministrador";
import  DashboardPaciente  from "./components/DashboardPaciente";
import  LoginAdministrador  from "./components/LoginAdministrador";
import  LoginPaciente  from "./components/LoginPaciente";
import PaginaNoEncontrada from './components/PaginaNoEncontrada';
 const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginAdministrador}/>
            <Route exact path="/LoginPaciente" component={LoginPaciente}/>
            <Route exact path="/DashboardAdministrador" component={DashboardAdministrador}/>
            <Route exact path="/DashboardPaciente" component={DashboardPaciente}/>
             <Route component={PaginaNoEncontrada}/>
        </Switch>
    )
}

export default Routes;