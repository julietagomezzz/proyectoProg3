import React from 'react'
import './styles.css'
export default function Header() {
    return (
        <header>
        <nav>
            <img src="../img/logo.png" className="logo" alt="" />
            <a href="/">Home</a>
            <a href="/favoritos">Favoritos</a>
            <a href="/Peliculas">Películas</a>
            <a href="/Series">Series</a>
        </nav>
       </header>
    )
  }