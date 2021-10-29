import React, { useContext, useState } from 'react'
import { LetrasContext } from './LetrasContext'
import {useForm} from "../../hooks/useForm";
import {Error} from "../../components/Error";

export const LetrasForm = () => {

    const [error, setError] = useState(false);

    const {guardarBusqueda} = useContext(LetrasContext);

    const {cancion,banda,handleChange,reset}=useForm({
        cancion:"",
        banda:"",
    });


    const handleSubmit=e=>{
        e.preventDefault();

        if (cancion.trim()===""||banda.trim()==="") {
            setError(true);
            return;
        }

        setError(false);
        guardarBusqueda({
            cancion,
            banda
        })

        reset();
    }

    return (
        <form 
            className="search-form"
            onSubmit={handleSubmit}
        >
            <h2 className="main-heading">Buscador de letras canciones</h2>
            {error&&<Error mensaje="Todos los campos son obligatorios"/>}
            <div className="input-group">
                <label
                    className="label-text"
                    htmlFor="banda"
                >Nombre Banda:</label>
                <input
                    id="banda"
                    name="banda"
                    type="text"
                    autoComplete="off"
                    placeholder="Nombre banda"                    
                    className="form-control"
                    value={banda}
                    onChange={handleChange}
                />
            </div>

            <div className="input-group">
                <label
                    className="label-text"
                    htmlFor="cancion"
                >Nombre Cancion:</label>
                <input
                    id="cancion"
                    name="cancion"
                    type="text"
                    autoComplete="off"
                    placeholder="Nombre cancion"
                    className="form-control"
                    value={cancion}
                    onChange={handleChange}
                />
            </div>
            
            <button
                type="submit"
                className="btn-buscar"
            >
                Buscar
            </button>
            

        </form>
    )
}
