import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../App.css"

function PokemonCard({id}) {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [id]);

    return (
        <div className="pokemon-card">
            {Object.keys(pokemonData).length > 0 &&
            <>
                <h2>{pokemonData.name}</h2>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                <p><b>Moves: </b>{pokemonData.moves.length}</p>
                <p><b>Weight: </b>{pokemonData.weight}</p>
                <b>Abilities:</b>
                <ul className="abilities">
                {pokemonData.abilities.map((pokemonAbility) => {
                    return <li key={pokemonAbility.ability.name}>
                        {pokemonAbility.ability.name}
                    </li>
                })}
                </ul>
            </>
            }
        </div>
    )
}

export default PokemonCard;
