import { createContext, useEffect, useState } from "react";

export const LetrasContext=createContext();

export const LetrasProvider=({children})=>{
    const [busqueda, setBusqueda] = useState({});
    const [banda, setBanda] = useState({});
    const [letra, setLetra] = useState({});

    

    useEffect(() => {
        if(Object.keys(busqueda).length<1){
            return null;
        }
        const {cancion,banda}=busqueda;
        const obtenerDatos=async()=>{
            
            const [response1,response2]=await Promise.all([
                fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${banda}`),
                fetch(`https://api.lyrics.ovh/v1/${banda}/${cancion}`),
            ]);

            const [result1,result2]=await Promise.all([response1.json(),response2.json()]);
            
            

            setBanda(result1);
            setLetra(result2);
            
        }
        obtenerDatos();
    }, [busqueda]);
    
    
    
    const guardarBusqueda=(busqueda)=>{
        setBusqueda(busqueda);
    };

    return (
        <LetrasContext.Provider
            value={{
                guardarBusqueda,                                
                banda,
                letra
            }}
        >
            {children}
        </LetrasContext.Provider>
    );

}