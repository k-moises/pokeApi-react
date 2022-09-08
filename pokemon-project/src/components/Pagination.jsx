import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../pagination.css";

const Pagination = ({ changePage, pokemon, pokemonPerPage }) => {
    const [pageCount, setPageCount] = useState(0); //Variable para señalar en que numero de pagina vamos
    const [pokemonOffset, setPokemonOffset] = useState(0); //Es el Pokemon que inicia el offset

    useEffect(() => {
        const endOffset = pokemonOffset + pokemonPerPage; //Pokemon que termina el offset en este caso de 20 por pagina
        console.log(`Cargando Pokemon de ${pokemonOffset} a ${endOffset}`);
        setPageCount(Math.ceil(pokemon.length / pokemonPerPage)); //Formula para sacar cuantas páginas hay en total de los pokemones obtenidos del API
    }, [pokemonOffset, pokemon]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * pokemonPerPage) % pokemon.length;
        console.log(
            `Usuario eligió la pagina ${event.selected}, El cual tiene un offset de ${newOffset}`
        );
        setPokemonOffset(newOffset);
        changePage(newOffset);
    };

    return (
        <>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                nextLabel=">"
                pageClassName="page-pokemon"
                pageLinkClassName="page-link"
                previousClassName="page-pokemon"
                previousLinkClassName="page-link"
                nextClassName="page-pokemon"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-pokemon"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
};

export default Pagination;