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

        fetchData();
        console.log("test test");

    }, []);

    return (

        <div>
            {Object.keys(pokemonData).length > 0 &&
                <>
            <h1>Pokemon</h1>
                <button>Vorige</button>
                <button>Volgende</button>

            {pokemonData.results.map((data) => {
                return <PokemonCard
                id = {data.url.replace("https://pokeapi.co/api/v2/pokemon/","")}
                />
            })}
                </>
            }
        </div>
    )
}

export default App;
