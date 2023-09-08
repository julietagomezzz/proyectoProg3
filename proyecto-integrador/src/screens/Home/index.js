import React, { Component } from 'react'
import BuscadorForm from '../../components/Buscador/BuscadorForm'
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'
import PeliculasTotales from '../../components/PeliculasTotales/PeliculasTotales'
import SeriesTotales from '../../components/SeriesTotales/SeriesTotales'
import { options } from '../../utils/constants'
import './styles.css'


class index extends Component{
  constructor(props){
    super(props)
    this.state= {
      busqueda: []
    }
  }
  filtroPeliculas(input){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      busqueda: data.results
    }))
    .catch(err => console.log(err))
  }
  
    render(){ 
  return (
    <>
   <section>

        <BuscadorForm filtroPeliculas={(input) => this.filtroPeliculas(input)}/>
        <h2 className='subtitulo'> Peliculas populares <a href='/Peliculas'><button className='botonExplorar'>Explorar todas</button></a></h2>
        <PeliculasContainer/>
        <h2 className='subtitulo'> Series populares <a href='/Series'><button className='botonExplorar'>Explorar todas</button></a></h2>
        <SeriesContainer/>

    </section>
    </> 
  )
    }
}

export default index