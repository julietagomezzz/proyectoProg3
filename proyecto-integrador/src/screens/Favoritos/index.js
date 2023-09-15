import React, { Component } from 'react'
import FavContainer from '../../components/FavContainer/FavContainer'


class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      favoritos: [],
      datosSeries: []

    }
  }

  componentDidMount(){
    let storageFavs = localStorage.getItem('favoritos')
    let storageFavsSeries = localStorage.getItem('favoritosSeries')

    if(storageFavs !== null){
      let favsParseados = JSON.parse(storageFavs)
      Promise.all(
        favsParseados.map( id => 
            fetch('https://api.themoviedb.org/3/movie/' + id)
            .then( resp => resp.json())
          )
      ) 
      .then( data => this.setState({favoritos: data}))
      .catch(err => console.log(err))
    }
    
    if(storageFavsSeries !== null){
      let favsParseadosSeries = JSON.parse(storageFavsSeries)
      Promise.all(
        favsParseadosSeries.map( id => 
            fetch('https://api.themoviedb.org/3/tv/' + id)
            .then( resp => resp.json())
          )
      ) 
      .then( data => this.setState({datosSeries: data}))
      .catch(err => console.log(err))
    }
    
  }

  


  actualizarState(id){
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }

  actualizarStateSeries(id){
    let stateActualizadoSeries = this.state.datosSeries.filter(elm => elm.id !== id)
    this.setState({
      datosSeries: stateActualizadoSeries
    })
  }
  

   render() {
    return (
       <div>
        <h1>Tus favoritos</h1>
        <FavContainer actualizarState ={(id)=> this.actualizarState(id)} actualizarStateSeries ={(id)=> this.actualizarStateSeries(id)}peliculas={this.state.favoritos} series={this.state.datosSeries}  />
      </div>
    )
   }


  
}

export default index