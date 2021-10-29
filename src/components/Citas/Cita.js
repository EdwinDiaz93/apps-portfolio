import React, { useContext, useEffect } from 'react'
import { CitaItem } from './CitaItem';
import { CitasContext } from './CitasContext'


export const Cita = () => {
    const {state} = useContext(CitasContext);  

    useEffect(() => {
        localStorage.setItem("citas",JSON.stringify(state));
    }, [state]);

    
    return (
        <div className="col">
        {state.map(cita=>(
            <CitaItem
                key={cita.id}
                {...cita}
            />
        ))}
        </div>
    )
}
