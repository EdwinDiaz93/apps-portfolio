import React, { createContext, useReducer } from 'react';
import { citasReducer } from './CitasReducer';


const init=()=>{
    if(localStorage.getItem("citas")){
        return JSON.parse(localStorage.getItem("citas"));
    }
    else{
        return [];
    }
}

 export const CitasContext=createContext(null);

 export const CitasProvider=({children})=>{

    const [state, dispatch] = useReducer(citasReducer,[],init);

    const guardarCita=cita=>{
        dispatch({
            type:"add",
            payload:cita,
        });
    }

    const eliminarCita=idCita=>{
        dispatch({
            type:'delete',
            payload:idCita,
        });
    }

    return (
        <CitasContext.Provider
            value={{
                state,
                guardarCita,
                eliminarCita,
            }}
        >
            {children}
        </CitasContext.Provider>
    );
 }
