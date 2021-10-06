import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../App.css"

function PokemonCard({id, key}) {

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
            console.log("useEffect PokemonCard 1")
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
        console.log("useEffect PokemonCard 2")
    }, [id]);

    return (
        <div className="pokemon-card">
            {Object.keys(pokemonData).length > 0 &&
                <>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
            <p><b>Moves: </b>{pokemonData.moves.length}</p>
            <p><b>Weight: </b>{pokemonData.weight}</p>
            <p><b>Abilities:</b></p>{pokemonData.abilities.map((pokemonAbility) => {
            return <span className="abilities">{pokemonAbility.ability.name}</span>
        })}
                </>
            }
        </div>
    )
}

export default PokemonCard;
