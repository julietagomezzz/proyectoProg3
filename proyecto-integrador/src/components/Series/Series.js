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
          <p>  Fecha de estreno: {this.props.descripcion} </p>
              <button type="" className="verMas">Ver mas</button>
          
      </article>
        )
    }
}

export default Series