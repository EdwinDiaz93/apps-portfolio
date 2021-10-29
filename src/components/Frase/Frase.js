import React from 'react'

export const Frase = ({frase}) => {

    
    if (frase.length<1) return null; 

    const {author,quote}=frase[0];

    return (
        <>
           <p>            
               <q className="quote"><span className="frase-text">{quote}</span></q>
           </p>
            <blockquote className="author">{author}</blockquote>
        </>
    )
}
