import React, { useContext } from 'react';
import { LetrasContext } from './LetrasContext';


export const Letra = () => {
    const {letra,banda} = useContext(LetrasContext);

    if(Object.keys(letra).length<1||!banda.artists) return null;

    const {strArtist}=banda.artists[0];
    

    const {lyrics}=letra;

    
    return (
        <div className="letra-container">
            <h2>
                {strArtist}
            </h2>
            <p className="letra">
                {lyrics}
            </p>
        </div>
    )
}
