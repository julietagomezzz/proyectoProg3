import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import { Link } from "react-router-dom"
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'

class index extends Component {
  
  constructor(props){
    super(props)
    this.state={
        movieData:null,
        generos: [],
        esFavorito: false
    }
}

  componentDidMount(){
    
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
      
      generos: data.genres.map((genre) => genre.name),
      movieData: data,
      
    },
    () => {
      let storageFav = localStorage.getItem('favoritos')
      let arrParseado = JSON.parse(storageFav)

      if (arrParseado !== null){
        let estaMiPelicula = arrParseado.includes(this.state.movieData.id)
        if(estaMiPelicula){
          this.setState({
            esFavorito: true
          })
        }
      }
    }

    ), )
    .catch(err => console.log(err))


  }

  agregarAFavoritos(idPersonaje){
    let storageFav = localStorage.getItem('favoritos')
    if(storageFav === null){
      let arrIds = [idPersonaje]
      let arrStringificado = JSON.stringify(arrIds)
      localStorage.setItem('favoritos', arrStringificado)
    } else {
      let arrParseado = JSON.parse(storageFav)
      arrParseado.push(idPersonaje)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('favoritos', arrStringificado)
    }

    this.setState({
      esFavorito: true
    })
  }
  sacarDeFavoritos(idPersonaje){
    let storageFav = localStorage.getItem('favoritos')
    let arrParseado = JSON.parse(storageFav)
    let favsFiltrados = arrParseado.filter((id) => id !== idPersonaje)
    let arrStringificado = JSON.stringify(favsFiltrados)
    localStorage.setItem('favoritos', arrStringificado)
    
    this.setState({
      esFavorito: false
    })
    
  }

  

  render() {
    return (
      <>
      {
        this.state.movieData === null ?
        <div className='container'>
          <img src= "../img/loading.gif"
          alt="Trayendo Peliculas" />
          </div>
        :
           <section className='sectionDetalle'>
            <div className='character-card'>
              <Link to={`/movie/id/${this.state.movieData.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.state.movieData.poster_path} alt={this.state.movieData.title} className='image'/></Link>
            </div>
              <article className="cajahijapelis">
              <h2 className="titulo" > {this.state.movieData.title}</h2>
              <p className="subtitulo">RATING: {this.state.movieData.vote_average}</p>
              <p className="subtitulo">FECHA DE ESTRENO:  { this.state.movieData.release_date}</p>
              <p className="subtitulo">GÉNERO:  { this.state.generos.join(', ')} </p>
              
              <p className="subtitulo">DURACIÓN: {this.state.movieData.runtime} minutes</p>
              <p className="subtitulo">SINOPSIS: {this.state.movieData.overview}</p>
              {
                this.state.esFavorito ? 
                <button onClick = {() => this.sacarDeFavoritos(this.state.movieData.id)}>
                  Sacar de Favoritos
                </button>
                : 
                <button onClick = {() => this.agregarAFavoritos(this.state.movieData.id)}>
                  Agregar a Favoritos
                </button>
              }
                
              </article>
          </section>
          
        }
      </>
    )
  }
}

export default index