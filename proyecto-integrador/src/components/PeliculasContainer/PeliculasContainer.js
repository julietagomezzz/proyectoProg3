import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import BuscadorForm from '../Buscador/BuscadorForm'
import './styles.css'

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
      peliculas: data.results
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
          <h1>Trayendo peliculas</h1> :
          this.state.peliculas.map((pelicula, index)=> {
            if (index < 5){
              return(
              <Peliculas nombre={pelicula.title} imagen={pelicula.poster_path} descripcion={pelicula.release_date} id={pelicula.id}  />
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