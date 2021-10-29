import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import { Citas } from '../Citas';
import { Frases } from '../Frases';
import { Letras } from '../Letras';
import { NavBar } from '../NavBar';
export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>

            <Switch>
                <Route
                    exact
                    path="/citas"  
                    component={Citas}                     
                />                    

                <Route
                    exact
                    path="/frases"  
                    component={Frases}                     
                />
                <Route
                    exact
                    path="/letras"
                    component={Letras}
                />

                <Redirect to="/citas"/> 
            </Switch>
        </Router>
    )
}
