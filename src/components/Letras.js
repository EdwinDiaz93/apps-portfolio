import React from 'react'
import "../scss/letras.scss";
import { Info } from './Letras/Info';
import {  LetrasProvider } from './Letras/LetrasContext';
import { LetrasForm } from './Letras/LetrasForm';


export const Letras = () => {
    
    
    return (
            <LetrasProvider>
                <div className="letras-containter">                    
                    <LetrasForm/>
                    <Info/>    
                </div>
            </LetrasProvider>
        );
}
