import React, { Component } from 'react'
import BuscadorForm from '../../components/Buscador/BuscadorForm'
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'
import PeliculasTotales from '../../components/PeliculasTotales/PeliculasTotales'
import SeriesTotales from '../../components/SeriesTotales/SeriesTotales'
import './styles.css'


class index extends Component{
    render(){ 
  return (
    <>
   <section>

        <BuscadorForm/>
        <h2 className='subtitulo'> Peliculas populares </h2>
        <PeliculasContainer/>
        <h2 className='subtitulo'> Series populares </h2>
        <SeriesContainer/>

    </section>
    </> 
  )
    }
}

export default index