import { Component } from "react"

class Peliculas extends Component{
    constructor(props){
        super(props)
    }

    saludar(nombreHeroe){
        alert('Hola mi nombre es ' + nombreHeroe)
    }

    render(){
        return(
        // <div onClick={(nombreHeroe)=> this.saludar(this.props.nombre)} className="character-card">
        //       <img src={this.props.imagen} alt={this.props.nombre} />
        //       <h4>{this.props.nombre}</h4>
        //       <p>{this.props.descripcion}</p>
        //       <p>{this.props.id}</p>
        //       <a href="#">Ver más</a>
        //   </div>
        <article >
           <img src= "https://image.tmdb.org/t/p/w500/{this.props.imagen} "
          alt={this.props.nombre} />
          <p class="nombrePeli">{this.props.nombre}</p>
          <p>  Fecha de estreno: {this.props.descripcion} </p>
          <a href="./detalle-pelicula.html?id=${this.props.id}">
              <button type="" class="verMas">Ver mas</button>
          </a>
      </article>
        )
    }
}

export default Peliculas