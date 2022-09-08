import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemons from './Pokemons';
import '../pokemonsResults.css'
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

const PokemonResults = ({ search }) => {

    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [option, setOption] = useState("all");
    const [dataPokemon, setData] = useState([]);
    const [PokemonsxPagina, setPokemonsxPagina] = useState(20);
    console.log(pokemon);
    const filter = pokemon.filter((dato) => dato.data.name.toLowerCase().includes(search.toLocaleLowerCase()));

    const getPokemonList = async () => {
        let pokemonList = [];
        for (let i = 1; i <= 200; i++) {
            pokemonList.push(await getPokemonData(i));
            setData(pokemonList)

        }
        console.log("pokemon array", pokemonList);
        setPokemon(pokemonList);
    }

    const getPokemonData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        return response;
    }

    useEffect(() => {
        trackPromise(
            getPokemonList()
        );
    }, [])

    useEffect(() => {
        console.log(option == "news");
        if (option == "news") {
            setPage(0);
            setPokemon(shuffle(pokemon));
            setPokemonsxPagina(10);
        }
        else {

            setPage(0);
            setPokemon(shuffle(dataPokemon));
            setPokemonsxPagina(20);
        }
    }, [option]);

    //Random
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    const changePage = (num) => {
        return setPage(num);
    };

    const handleOption = opc => {
        setOption(opc);
    };


    return (

        <>
            <div className="body-grid">
                <div className="options-container">
                    <button className={`news ${option == "news" ? "selected" : ""}`} onClick={() => handleOption("news")}>Recientes</button>
                    <button className={`all ${option == "all" ? "selected" : ""}`} onClick={() => handleOption("all")}>Todos</button>
                </div>

                <div className="grid-container">
                    {

                        !search ? pokemon.slice(page, page + PokemonsxPagina)
                            .map(element => (
                                <Pokemons key={element.data._id} pokemon={element.data} />
                            )) : filter.slice(page, page + PokemonsxPagina)
                                .map(element => (
                                    <Pokemons key={element.data._id} pokemon={element.data} />
                                ))

                    }
                </div>

                <LoadingIndicator />

                {
                    // Páginación
                    option == "all" ? <Pagination changePage={changePage} pokemon={!search ? pokemon : filter} pokemonPerPage={PokemonsxPagina} /> : ""
                }
            </div>
        </>

    )

}

export default PokemonResults