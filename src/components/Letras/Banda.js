import React, { useContext } from 'react'
import { LetrasContext } from './LetrasContext'

export const Banda = () => {
    const {banda} = useContext(LetrasContext);

    if(!banda.artists) return null;

    const {strArtist,strBiographyES,strCountry,strArtistThumb,strWebsite,strTwitter,strFacebook}=banda.artists[0];
    return (
        <div className="banda-container">
            <h2>
                {strArtist}
            </h2>

            <div className="bio-container">
                <img className="img-band" src={strArtistThumb} alt={strArtist}/>
                <label className="label-text">Ciudad</label>
                <p>{strCountry}</p>

                <label className="label-text">Biografia</label>
                <p>{strBiographyES}</p>

                <div className="socials">
                    <a className="social-link" href={`https://${strWebsite}`} target="_blank" rel="noreferrer" ><i className="fas fa-globe-europe"></i></a>
                    <a className="social-link" href={`https://${strTwitter}`} target="_blank" rel="noreferrer" ><i className="fab fa-twitter"></i></a>
                    <a className="social-link" href={`https://${strFacebook}`} target="_blank" rel="noreferrer" ><i className="fab fa-facebook"></i></a>                
                </div>
            </div>

        </div>
    )
}
