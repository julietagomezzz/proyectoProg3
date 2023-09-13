import React, { Component } from 'react'
import { Link } from "react-router-dom" 
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

  componentDidMount() {
    
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
        {
          this.state.busqueda.length === 0 ?
          <main></main>
          :
          <main><PeliculasTotales movies={this.state.busqueda}/></main>
        }
        <h2 className='subtitulo'> Peliculas populares <Link to='/Peliculas'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <PeliculasContainer/>
        <h2 className='subtitulo'> Series populares <Link to='/Series'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <SeriesContainer/>

    </section>
    </> 
  )
    }
}

export default index