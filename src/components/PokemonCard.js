import React from 'react';

function PokemonCard({pokemonData, title, image, moves, weight, abilities}) {

    const allAbilities = pokemonData.map((data) => {
        return <span className="abilities">{data.title}</span>
    });

    return (
        <>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p><b>Moves: </b>{moves}</p>
            <p><b>Weight: </b>{weight}</p>
            <p>Abilities:</p>{allAbilities}
        </>
    )
}

export default PokemonCard;
