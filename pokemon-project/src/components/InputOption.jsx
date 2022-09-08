import React from 'react'

const InputOption = () => {



    return (
        <>
            <div className='nav'>




                <div className="search-container">
                    <form action="/">

                        <input value={search} onChange={handleInput} type="text" placeholder='Buscar..' name="search" />

                    </form>
                </div>


            </div>
        </>
    )
}

export default InputOption