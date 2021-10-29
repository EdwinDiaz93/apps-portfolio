import React, { useContext} from 'react'
import { CitasContext } from './CitasContext'


export const CitaItem = ({id,name,last,hour,date}) => {
    const {eliminarCita} = useContext(CitasContext);

    const handleDelete=cita=>{
        eliminarCita(cita);
    }

  

    return (        
        <div className="cita-container">
            <p className="cita-text"><span className="bold cita-info">ID:</span>   &nbsp;&nbsp;{id} </p>
            <p className="cita-text"><span className="bold cita-info">Name:</span> &nbsp;&nbsp;{name} </p>
            <p className="cita-text"><span className="bold cita-info">Last:</span> &nbsp;&nbsp;{last} </p>
            <p className="cita-text"><span className="bold cita-info">Hour:</span> &nbsp;&nbsp;{hour} </p>
            <p className="cita-text"><span className="bold cita-info">Date:</span> &nbsp;&nbsp;{date} </p>
        <button 
            className="btn-delete"
            onClick={()=>handleDelete(id)}
        >Borrar</button>
        </div>        
    )
}
