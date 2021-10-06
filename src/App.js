import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import NavButton from "./components/NavButton";

function App() {

    const [pokemonData, setPokemonData] = useState({});
    const [navigation, setNavigation] = useState(0);


    function handlePreviousClick() {
        setNavigation(navigation - 20);
        console.log(navigation)
    }
    function handleNextClick() {
        setNavigation(navigation + 20);
        console.log(navigation)
    }

    // useEffect voor refresh pagina
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${navigation}`);
                console.log(result.data);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
            fetchData();
    }, []);

    // useEffect voor verandering navigation
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${navigation}`);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [navigation]);


    return (

        <div>
            {/* checken of er wel keys of waardes in object staan */}
            {Object.keys(pokemonData).length > 0 &&
            <>
                <img src="https://1000merken.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="Pokemon-logo"
                     className="logo"/>
                <NavButton
                    buttonName="Vorige"
                    disableButton={pokemonData.previous === null} // als pokemonData.previous null is, wordt de button disabled.
                    handleClick={handlePreviousClick}
                />
                <NavButton
                    buttonName="Volgende"
                    disableButton={pokemonData.next === null} // als pokemonData.next null is, wordt de button disabled.
                    handleClick={handleNextClick}
                />

                <div className="pokemon-container">
                    {pokemonData.results.map((data) => {
                        return <PokemonCard
                            id={data.url.replace("https://pokeapi.co/api/v2/pokemon/", "")}
                        />
                    })}
                </div>
            </>
            }
        </div>
    )
}

export default App;
