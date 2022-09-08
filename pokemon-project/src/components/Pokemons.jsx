import React from 'react'
import { Link } from 'react-router-dom'
import '../pokemon.css'

const Pokemons = ({ pokemon }) => {

    return (

        <Link to={`/pokemon/${pokemon.id}`}>
            <div className="pokemon-container">
                <div className="img-pokemon">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div className="hover-container">
                        <div className="hover">
                            <div className="top">
                                <p className="title-hover">{'Type(s):'}</p>
                                {
                                    pokemon.types.map((type, index) => {
                                        return (
                                            <p key={index} className="pokemon-type-text">
                                                {`${index + 1}.-`} {type.type.name}
                                            </p>
                                        );

                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-pokemon">
                    <p className="name-pokemon">{pokemon.name}</p>

                </div>
            </div>
        </Link>
    )
}





export default Pokemons