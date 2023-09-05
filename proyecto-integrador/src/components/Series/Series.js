import './styles.css'
import { Component } from "react"

class Series extends Component{
    constructor(props){
        super(props)
    }

   f

    render(){
        return(
        
        <article >
           <img src= {`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} 
          alt={this.props.nombre} />
          <p className="nombrePeli">{this.props.nombre}</p>
          {/* <p>  Fecha de estreno: {this.props.descripcion} </p> */}
          <a className='descripcionOculta'>Ver más</a>

          <a href="/DetalleSerie/id/:id">
            <button type="" className="verMas">Ir a detalle</button>
        </a>
          
      </article>
        )
    }
}

export default Series