import React from 'react'
import SeriesTotales from '../../components/SeriesTotales/SeriesTotales'
import { Component } from "react"
import { options } from '../../utils/constants'
let apiKey= "bfec0622d489778cd408f2f5942ce52d"
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

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
  fetch(seriesPopulares, options) //poner todas las peliculas
      .then(response => response.json())
      .then(data => this.setState({
          movies: data.results,
          backup: data.results  
      }))
      
      .catch(err => console.error(err));
}
TraerMasMovies() {
console.log("Cargando más series...");
fetch(`https://api.themoviedb.org/3/tv/popular?page=${this.state.page + 1}`, options)
  .then(response => response.json())
  .then(data => {
    console.log("Nuevos datos:", data);
    this.setState({
      movies: this.state.movies.concat(data.results),
      backup: this.state.backup.concat(data.results),
      page: this.state.page + 1
    });
  })
  .catch(err => console.log(err))
}



render(){
return (
  <>
  <SeriesTotales movies={this.state.movies} TraerMasMovies={() => this.TraerMasMovies()} />
  <p>Página actual: {this.state.page}</p>
  <section>
  <button onClick={() => this.TraerMasMovies()}>Cargar más películas</button>
  </section>
  <br></br>
  </>
)
}}

export default index