import React from 'react'
import './styles.css'
export default function Header() {
    return (
        <header>
        <nav>
            <img src="../img/logo.png" className="logo" alt="" />
            <a href="./index.html">Home</a>
            <a href="./favoritos.html">Favoritos</a>
            <a href="./genero.html">Ver todas</a>
        </nav>
        <form action="resultados.html" method="get" className="formulario">
            <label for="" className="palabraBuscador">Buscar pelicula o serie:</label>
            <input type="text" name="busqueda" value="" />
            <button type="submit">Buscar</button>
        </form>

       </header>
    )
  }