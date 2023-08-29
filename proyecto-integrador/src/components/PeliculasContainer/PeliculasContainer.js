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
      personajes: [],
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
      personajes: data.results
    }))
    .catch(err => console.log(err))
  }
  
  traerMasPersonajes(){
    fetch(peliculasPopulares)
    .then(resp => resp.json())
    .then(data => this.setState({
      personajes: this.state.personajes.concat(data.results),
      page: this.state.page + 1
    }))
    .catch(err => console.log(err))

  }

  render(){
    return (
      <>
      <div className='characters-container'>
        {
          this.state.personajes.length === 0 ?
          <h1>Trayendo personajes</h1> :
          this.state.personajes.map((personaje)=> <Peliculas nombre={personaje.title} imagen={personaje.poster_path} descripcion={personaje.release_date} id={personaje.id}  />)
        }
      </ div>
        <button onClick={()=> this.traerMasPersonajes()}>Traer mas personajes</button>
      </>
    )
  }
}

export default PeliculasContainer