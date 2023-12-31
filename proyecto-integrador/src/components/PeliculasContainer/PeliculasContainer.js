import React, {Component} from 'react'
import { options } from '../../utils/constants'
import Peliculas from '../Peliculas/Peliculas'
import './styles.css'
import BuscadorFilter from '../BuscadorFilter/BuscadorFilter'

let apiKey= "bfec0622d489778cd408f2f5942ce52d"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`


class PeliculasContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      backup:[],
      page:1
    }
  }

  componentDidMount(){
    this.traerPeliculas()
  }

  traerPeliculas(){
    fetch(peliculasPopulares)
    .then(resp => resp.json())
    .then(data => this.setState({
      peliculas: data.results,
      backup: data.results
    }))
    .catch(err => console.log(err))
  }
  

  filtrarPersonajes(nombre){
    let personajesFiltrados = this.state.backup.filter((elm) => elm.name.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      personajes: personajesFiltrados,
    })
  }

  render(){
    return (
      <>
       <section className="cajapadre" id="peliculasPopu" >
        {
          this.state.peliculas.length === 0 ? 
          <img src= "../img/loading.gif"
          alt="Trayendo Peliculas" /> :
          this.state.peliculas.map((pelicula, index)=> {
            if (index < 5){
              return(
              <>
              <Peliculas 
                nombre={pelicula.title} 
                imagen={pelicula.poster_path} 
                descripcion={pelicula.release_date} 
                id={pelicula.id} 
                resumen={pelicula.overview}
              />
              </>
              )
            }
          }
          )
        }
      
      </section>
      </>
    )
  }
}

export default PeliculasContainer