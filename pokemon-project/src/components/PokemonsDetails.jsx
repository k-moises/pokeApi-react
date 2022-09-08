import React from 'react'
import NavbarToHome from "./NavbarToHome";
import '../pokemonsDetails.css'
const PokemonsDetails = ({ pokemon }) => {


    return (

        <>
            <NavbarToHome />

            <div className="pokemon-det">
                <div className="pokemon-det-info">
                    <h2>Number:</h2>
                    <p className='pokemon-det-color'>{pokemon.id}</p>
                    <h2>Name:</h2>
                    <p className='pokemon-det-color'>{pokemon.name}</p>
                    <div >
                        <h2>Type:</h2>
                        {
                            pokemon.types.map((type, index) => {
                                return (
                                    <p key={index} className="pokemon-det-color">
                                        {`${index + 1}.`} {type.type.name}
                                    </p>
                                );

                            })}

                    </div>
                    <div >
                        <h2>Abilities:</h2>
                        {
                            pokemon.abilities.map((ability, index) => {
                                return (
                                    <p key={index} className="pokemon-det-color">
                                        {`${index + 1}.`} {ability.ability.name}
                                    </p>
                                );

                            })}

                    </div>


                </div>
                <div className="img-pokemon-det">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            </div>
        </>

    )
}

export default PokemonsDetails