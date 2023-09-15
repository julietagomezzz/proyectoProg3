import PeliculasTotales from '../../components/PeliculasTotales/PeliculasTotales'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
let apiKey= "bfec0622d489778cd408f2f5942ce52d"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

class index extends Component {
    constructor(props){
        super(props)
        this.state ={
            movies: [], 
            backup: [],
            page:1
        }
    }

  componentDidMount(){
    fetch(peliculasPopulares, options) //poner todas las peliculas
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results,
            backup: data.results  
        }))
        
        .catch(err => console.error(err));
}
TraerMasMovies(){
    fetch(peliculasPopulares, options)
    .then(response => response.json())
    .then(data=> this.setState({
        movies: this.state.movies.concat(data.results),
        backup: this.state.backup.concat(data.results),
        page: this.state.page + 1
    }))
}



render(){
  return (
    <>
    <PeliculasTotales movies={this.state.movies} TraerMasMovies={() => this.TraerMasMovies()} />
    <button onClick={() => this.TraerMasMovies()}>Cargar más películas</button>
    
    </>
  )
}}

export default index