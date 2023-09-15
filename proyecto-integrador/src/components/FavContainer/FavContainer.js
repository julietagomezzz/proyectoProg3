import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import Series from '../Series/Series';
import SeriesTotales from '../SeriesTotales/SeriesTotales';
import './styles.css'


export default class FavContainer extends Component {
    constructor(props){
        super(props) 
        this.state = {
            favoritos: [],
            
  
          } }
       
    render() {
    return (
      <>
      <div className='favContainer'>

        {
          this.props.peliculas.length === 0?
          <img src= "../img/loading.gif" alt="Trayendo Peliculas" /> :       
           this.props.peliculas.map((elm, idx) => <Peliculas  id = {elm.id} imagen = {elm.poster_path} nombre = {elm.title} resumen = {elm.overview} actualizarState ={(id)=> this.actualizarState(id)} peliculas={this.state.favoritos}/>
        )
        }

{
          this.props.series.length === 0?
          <img src= "../img/loading.gif" alt="Trayendo Peliculas" /> :       
           this.props.series.map((elm, idx) => <Series  id = {elm.id} imagen = {elm.poster_path} nombre = {elm.title} resumen = {elm.overview} actualizarStateSeries ={(id)=> this.actualizarStateSeries(id)} series={this.state.favoritos}/>
        )
        }
        
      </div>
      </>
    )
  }
}