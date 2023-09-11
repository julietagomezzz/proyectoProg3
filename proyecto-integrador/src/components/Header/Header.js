import React from 'react'
import { Link } from "react-router-dom"
import './styles.css'
export default function Header() {
    return (
        <header>
        <nav>
            <img src="../img/logo.png" className="logo" alt="" />
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/favoritos"><h1>Favoritos</h1></Link>
            <Link to="/Peliculas"><h1>Películas</h1></Link>
            <Link to="/Series"><h1>Series</h1></Link>
        </nav>
       </header>
    )
  }