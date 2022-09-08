import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from "react-router-dom";
import PokemonsDetails from './PokemonsDetails';


const OnePokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const params = useParams();
    console.log("Pokemon: ", pokemon);

    const getPokemonList = async () => {
        let pokemonList = [];
        pokemonList.push(await getPokemonData(params.id));
        console.log("pokemon array", pokemonList);
        setPokemon(pokemonList);
    }

    const getPokemonData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response;
    }

    useEffect(() => {
        getPokemonList();
    }, [])


    return (

        <>

            {
                pokemon.map(element => (
                    <PokemonsDetails key={element.data.id} pokemon={element.data} />
                ))
            }

        </>

    )

}

export default OnePokemon