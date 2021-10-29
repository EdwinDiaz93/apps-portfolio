import React from 'react'
import { Banda } from './Banda'
import { Letra } from './Letra'

export const Info = () => {
    return (
        <div className="info">
            <Banda/>
            <Letra/>            
        </div>
    )
}
