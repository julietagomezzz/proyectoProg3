import React, {Component} from 'react'
import Series from '../Series/Series'
import './styles.css'

let apiKey= "bfec0622d489778cd408f2f5942ce52d"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`


class SeriesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      series: [],
      page:1
    }
  }

  componentDidMount(){
    this.traerSeries()
  }

  traerSeries(){
    fetch(seriesPopulares)
    .then(resp => resp.json())
    .then(data => this.setState({
      series: data.results
    }))
    .catch(err => console.log(err))
  }


  render(){
    return (
      <>
       <section className="cajapadre" id="peliculasPopu" >
        {
          this.state.series.length === 0 ? 
          <img src= "../img/loading.gif"
          alt="Trayendo Peliculas" /> :
          this.state.series.map((serie, index)=> {
            if (index < 5){
              return(
              <Series nombre={serie.name} imagen={serie.poster_path} descripcion={serie.first_air_date} id={serie.id}  />
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

export default SeriesContainer