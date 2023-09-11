import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import { Link } from "react-router-dom"

class index extends Component {
  
  constructor(props){
    super(props)
    this.state={
        movieData:null,
    }
}

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      movieData: data
    }))
    .catch(err => console.log(err))
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
              <p className="subtitulo">GÉNERO: </p>
              
              <p className="subtitulo">DURACIÓN: {this.state.movieData.runtime} minutes</p>
              <p className="subtitulo">SINOPSIS: {this.state.movieData.overview}</p>
              {
                this.state.isFav ?
                <button className='botonFav' onClick={() => this.removeFav(this.state.movieData.id)}>REMOVE FROM FAV</button>
                :
                <button className='botonFav' onClick={() => this.addToFav(this.state.movieData.id)}>ADD TO FAV</button>
              }
                
                
              </article>
          </section>
          
        }
      </>
    )
  }
}

export default index