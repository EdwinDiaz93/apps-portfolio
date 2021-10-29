import React, {  useContext, useState } from 'react'
import {useForm} from '../../hooks/useForm';
import { Error } from '../Error';
import { CitasContext } from './CitasContext';

export const CitasForm = () => {    
    const [error, setError] = useState(false);
    const {guardarCita} = useContext(CitasContext);
    const {name,last,id,date,hour,handleChange,reset} =useForm({
        name:"",
        last:"",
        id:"",
        hour:"",
        date:"",
    });    
    
    const handleSubmit=e=>{
        e.preventDefault();
        if (name.trim()===""||last.trim()===""||isNaN(id)||date===""||hour==="") {
            setError(true);
            return;            
        }
        setError(false);
        reset();
        const cita={name,last,id,hour,date};

        guardarCita(cita);
        
    }

    return (
        <div className="col"> 
            <h2 className="heading d-block">Administrador de citas</h2>
            {error&&<Error mensaje="Todos los campos son obligatorios"/>}
            <form 
            onSubmit={handleSubmit}
            className="citas-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        autoComplete="off"
                        className="form-control"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last">Last Name:</label>
                    <input
                        id="last"
                        name="last"
                        type="text"
                        placeholder="Enter your LastName"
                        autoComplete="off"
                        className="form-control"
                        value={last}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input
                        id="id"
                        name="id"
                        type="number"
                        placeholder="Enter Your ID"
                        autoComplete="off"
                        className="form-control"
                        value={id}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        autoComplete="off"
                        className="form-control"
                        value={date}
                        onChange={handleChange}
                    />
                </div>                
                <div className="form-group">
                    <label htmlFor="hour">Hour:</label>
                    <input
                        id="hour"
                        name="hour"
                        type="time"
                        autoComplete="off"
                        className="form-control"
                        value={hour}
                        onChange={handleChange}
                    />
                </div>                
                <button
                    className="btn-submit"
                    type="submit"
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}
