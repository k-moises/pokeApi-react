import React from 'react'
import { Link } from 'react-router-dom'

const NavbarToHome = () => {

    return (

        <>
            <div className='nav'>

                <Link to={'/home'} >
                    <div className="title-container">
                        <h1>Home</h1>
                    </div>
                </Link>

                <div className="right-container" >

                </div>
                <i className="menu-toggle fas fa-bars"></i>
            </div>
        </>

    )

}

export default NavbarToHome