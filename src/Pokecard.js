import React from 'react';
import "./Pokecard.css"

function Pokecard({id, name, type, base_experience}) {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img className="Pokecard-image" src={imgSrc} alt=''/>
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-base_experience"> Base Experience: {base_experience}</p>
        </div>
    );
}

export default Pokecard;