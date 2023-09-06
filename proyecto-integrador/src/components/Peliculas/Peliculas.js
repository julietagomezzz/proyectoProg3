import './styles.css'
import { Component } from "react"

class Peliculas extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
        
        <article >
           <img src= {`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} 
          alt={this.props.nombre} />
          <p className="nombrePeli">{this.props.nombre}</p>
          <a className='descripcionOculta'>Ver más</a>
           
        <a href={`/DetallePelicula/id/${this.props.id}`}>
            <button type="" className="verMas">Ir a detalle</button>
        </a>
        </article>
        )
    }
}

export default Peliculas