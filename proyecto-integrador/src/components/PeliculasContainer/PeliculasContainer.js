import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
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
    this.traerPersonajes()
  }

  traerPersonajes(){
    fetch(peliculasPopulares)
    .then(resp => resp.json())
    .then(data => this.setState({
      peliculas: data.results
    }))
    .catch(err => console.log(err))
  }
  
  traerMasPersonajes(){
    fetch(peliculasPopulares)
    .then(resp => resp.json())
    .then(data => this.setState({
      peliculas: this.state.peliculas.concat(data.results),
      page: this.state.page + 1
    }))
    .catch(err => console.log(err))

  }

  render(){
    return (
      <>
       <section className="cajapadre" id="peliculasPopu" >
        {
          this.state.peliculas.length === 0 ?
          <h1>Trayendo peliculas</h1> :
          this.state.peliculas.map((pelicula)=> <Peliculas nombre={pelicula.title} imagen={pelicula.poster_path} descripcion={pelicula.release_date} id={pelicula.id}  />)
        }
      
        <button onClick={()=> this.traerMasPersonajes()}>Mas peliculas</button></section>
      </>
    )
  }
}

export default PeliculasContainer