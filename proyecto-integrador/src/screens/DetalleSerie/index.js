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
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}`, options)
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
              <div id='load'><h1 className='letter'>Trayendo serie...</h1></div>
          </div>
        :
           <section>
            <article className='character-card'>
              <Link to={`/movie/id/${this.state.movieData.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.state.movieData.poster_path} alt={this.state.movieData.title} className='image'/></Link>
              <h3 className='letter'>{this.state.movieData.name}</h3> 
            </article>
              <article className="cajahijapelis">
              <h2 className="letter" id="titulo2">{this.state.movieData.name}</h2>
              <p className="letter" id="data">RATING: {this.state.movieData.vote_average}</p>
              <p className="letter" id="data">FECHA DE ESTRENO:  { this.state.movieData.first_air_date}</p>
              <p className="letter" id="data">GÉNERO: { this.state.movieData.first_air_date}</p>
             
              <p className="letter" id="data">DURACIÓN: {this.state.movieData.episode_run_time} minutes</p>
              <p className="letter" id="data">SINOPSIS: {this.state.movieData.overview}</p>
              {
                this.state.isFav ?
                <button onClick={() => this.removeFav(this.state.movieData.id)}>REMOVE FROM FAV</button>
                :
                <button onClick={() => this.addToFav(this.state.movieData.id)}>ADD TO FAV</button>
              }
                
                
              </article>
          </section>
          
        }
      </>
    )
  }
}

export default index