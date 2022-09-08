import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ handleInput, search }) => {

    return (

        <>
            <div className='nav'>
                <Link to={'/home'} >
                    <div className="title-container">
                        <h1>PokeApi</h1>
                    </div>
                </Link>
                <div className="right-container" >

                    <div className="search-container">
                        <form action="/">

                            <input value={search} onChange={handleInput} type="text" placeholder='Buscar..' name="search" />

                        </form>
                    </div>
                </div>
                <i className="menu-toggle fas fa-bars"></i>
            </div>
        </>

    )

}

export default Navbar