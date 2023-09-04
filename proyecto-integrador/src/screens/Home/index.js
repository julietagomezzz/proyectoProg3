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
        <PeliculasContainer/>
        <SeriesContainer/>

    </section>
    </> 
  )
    }
}

export default index