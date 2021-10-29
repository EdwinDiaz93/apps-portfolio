import React  from 'react';
import { Cita } from './Citas/Cita';
import { CitasProvider } from './Citas/CitasContext';
import { CitasForm } from './Citas/CitasForm';
import "../scss/citas.scss" ;
export const Citas = () => {    
    return (
        <CitasProvider>
            <div className="container">
                <div className="row">
                    <CitasForm/>
                    <Cita/>
                </div>
            </div>        
        </CitasProvider>
    )
}
