import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import './styles.css'
import BuscadorFilter from '../BuscadorFilter/BuscadorFilter';

let apiKey= "bfec0622d489778cd408f2f5942ce52d"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`


class PeliculasTotales extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      filtradas: [],
      page:1,
      filtroBusqueda:'',
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

 

  filtrarPeliculas(title){
    const filtroMin = title.toLowerCase(); // Convertir el filtro a minúsculas
    if (filtroMin === '') {
      this.setState({
        filtradas: this.state.peliculas,
        filtroBusqueda: title
      });
    } else {
    
    let peliculasFiltradas = this.state.filtradas.filter((elm)=> elm.title.toLowerCase().includes(filtroMin))
    console.log(peliculasFiltradas );
    this.setState({
        filtradas: peliculasFiltradas,
        filtroBusqueda: title, // Actualiza el filtro de búsqueda en el estado
    })}
}


  render(){
    return (
      <>

       <BuscadorFilter filtrarPeliculas={(title) => this.filtrarPeliculas(title)} />
       <section className="cajapadre" id="peliculasPopu">
          {
            this.state.peliculas.length === 0 ?
              <img src="../img/loading.gif"
                alt="Trayendo Peliculas" /> :
              this.state.filtradas.map((pelicula) => {
                return (
                  <Peliculas
                    key={pelicula.id}
                    nombre={pelicula.title}
                    imagen={pelicula.poster_path}
                    descripcion={pelicula.release_date}
                    id={pelicula.id}
                    resumen={pelicula.overview}
                  />
                )
              })
          }
        </section>
      </>
    )
  }
}

export default PeliculasTotales