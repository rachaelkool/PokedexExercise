import React from 'react';
import Pokecard from "./Pokecard"
import "./Pokedex.css"

function Pokedex({name, characters}) {
  return (
    <div className="Pokedex">
        <h1 className='Pokedex-title'>{name}'s Deck</h1>
       <div className='Pokedex-card'>
        {characters.map(p => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;