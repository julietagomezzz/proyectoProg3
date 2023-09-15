import PeliculasTotales from '../../components/PeliculasTotales/PeliculasTotales'
import React, { Component } from 'react'
let apiKey= "bfec0622d489778cd408f2f5942ce52d"


class index extends Component {
  constructor(props){
    super(props)
    this.state= {
      peliculas: [],
      
      page:1,
     
    }
  }

  componentDidMount(){
    this.traerMasPeliculas()
  }

  traerMasPeliculas(){
    const nextPage = this.state.page + 1;
    const nextPageURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${nextPage}`;
  fetch(nextPageURL)
  .then(resp => resp.json())
  .then(data => this.setState({
    peliculas: this.state.peliculas.concat(data.results),
    page: nextPage
  }))
  .catch(err => console.log(err))
}
render(){
  return (
    <>
    <PeliculasTotales/>
    <button onClick={()=> this.traerMasPeliculas()}>Traer mas peliculas</button>
    </>
  )
}}

export default index