import { useEffect, useState } from "react"


export const useFetch = (url) => {
        
    const [state, setstate] = useState([]);
    const [error, setError] = useState(false);    

    useEffect(()=>{
        const buscarFrase=()=>{
            fetch(url)
                    .then(response=>response.json())
                    .then(result=>{
                        setstate(result);
                    }).catch(()=>{
                        setError(true);
                    });
        }
        buscarFrase();        
    },[url]);


    return {
        frase:state,
        error
    }
}
