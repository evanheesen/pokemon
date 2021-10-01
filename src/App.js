import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/PokemonCard";

function App() {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                console.log(result.data);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (Object.keys(pokemonData) > 0) {
            fetchData();
            console.log("test App");
        }
    }, []);

    return (
        <div>
            {pokemonData && pokemonData.map}
            <h1>Pokemon</h1>
            <button>Vorige</button>
            <button>Volgende</button>

            {const id = }
            {pokemonData.map((pokemon) => {
                return pokemon[] === id;
            })}

            {/* 1. map over array 20 pokemon objecten
            2. neem index(id) van object als input van PokemonCard
            3.
            */}


            <PokemonCard
                id = {id}
            />

        </div>
    )
}

export default App;
