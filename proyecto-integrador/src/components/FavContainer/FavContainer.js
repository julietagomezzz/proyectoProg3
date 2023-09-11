import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import './styles.css'


export default class FavContainer extends Component {
    constructor(props){
        super(props) 
        this.state = {
            favoritos: []
          } }
       
    render() {
    return (
      <>
      <div className='favContainer'>

        {
          this.props.peliculas.length === 0?
          <img src= "../img/loading.gif" alt="Trayendo Peliculas" /> :       
           this.props.peliculas.map((elm, idx) => <Peliculas  id = {elm.id} imagen = {elm.poster_path} nombre = {elm.title} descripcion = {elm.overview} actualizarState ={(id)=> this.actualizarState(id)} peliculas={this.state.favoritos}/>
        )
        }
        
      </div>
      </>
    )
  }
}