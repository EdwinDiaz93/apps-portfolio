import { useState } from "react"


export const useCounter = (initialState=0) => {

    const [counter, setCounter] = useState(initialState);

    const increment=()=>{
        setCounter(c=>c+1);
    }
    
    const decrement=()=>{        
        setCounter(c=>c-1);
    }

    return {
        counter,
        increment,
        decrement
    }
}
