import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/PokemonCard";

function App() {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
                console.log(result.data);
                setPokemonData(result.data);
            } catch(e) {
                console.error(e);
            }
        }
        if(Object.keys(pokemonData) > 0) {
            fetchData();
            console.log("test");
        }
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            <button>Vorige</button>
            <button>Volgende</button>
            <PokemonCard
                pokemonData={pokemonData}
                title={pokemonData.name}
                image={pokemonData.sprites.front_default}
                moves={pokemonData.moves.length}
                weight={pokemonData.weight}
                />

        </div>
    )
}

export default App;
