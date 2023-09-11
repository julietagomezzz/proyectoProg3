import './styles.css'
import { Component } from "react"
import { Link } from "react-router-dom" 
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

          <Link to={`/DetalleSerie/id/${this.props.id}`}>
            <button type="" className="verMas">Ir a detalle</button>
            </Link>
          
      </article>
        )
    }
}

export default Series