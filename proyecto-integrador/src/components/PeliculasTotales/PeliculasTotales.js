import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import './styles.css'
import BuscadorFilter from '../BuscadorFilter/BuscadorFilter';

let apiKey= "bfec0622d489778cd408f2f5942ce52d"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`


class PeliculasTotales extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      filtradas: [],
      page:1,
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
      filtradas: data.results
    }))
    .catch(err => console.log(err))
  }

  filtrarPersonajes(nombre){
    let personajesFiltrados = this.state.backup.filter((elm) => elm.name.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      personajes: personajesFiltrados,
    })
  }
  evitarSubmit(evento){
    evento.preventDefault()
    
  }
  filtrarPeliculas(nombre){
    let peliculasFiltradas = this.state.peliculas.filter((elm)=> elm.title.toLowerCase().includes(nombre.toLowerCase()))
    console.log(peliculasFiltradas );
    this.setState({
        filtradas: peliculasFiltradas
    })
}


  render(){
    return (
      <>

       <BuscadorFilter filtrarPeliculas={(nombre)=> this.filtrarPeliculas(nombre)} />
       <section className="cajapadre" id="peliculasPopu" >
        {
          this.state.peliculas.length === 0 ? 
          <img src= "../img/loading.gif"
          alt="Trayendo Peliculas" /> :
          this.state.peliculas.map((pelicula)=> {
              return(
              <Peliculas nombre={pelicula.title} imagen={pelicula.poster_path} descripcion={pelicula.release_date} id={pelicula.id} resumen={pelicula.overview}  />
              )
            }
          )
        }
      
      </section>
      </>
    )
  }
}

export default PeliculasTotales