import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import PokemonResults from './components/PokemonsResults';

const App = () => {

  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    document.title = "PokeApi";
  }, []);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>

      <Navbar handleInput={handleInput} search={search} />

      <PokemonResults search={search} />

    </>
  )

}

export default App