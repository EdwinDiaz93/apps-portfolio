import React from 'react'
import "../scss/frases.scss"
import { Frase } from './Frase/Frase'
import {useCounter} from "../hooks/useCounter";
import { useFetch } from '../hooks/useFetch';
export const Frases = () => {

        const {counter,increment,decrement}=useCounter(1);

        const {frase}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        
    return (
        <div className="frase-container">
            <div className="frase">
                <Frase
                    frase={frase}
                />
            </div> 
            {
                counter>1
                &&
                <button            
                onClick={decrement}
                    className="btn-frase"
                >
                    Frase Anterior
                </button>
            }                
            {
                counter<=101
                &&
                <button
                    onClick={increment}
                    className="btn-frase"
                >
                    Siguiente Frase
                </button>
            }   
        </div>
    )
}
