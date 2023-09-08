import { Component } from "react";
import './styles.css'


class BuscadorForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(evento){
        evento.preventDefault()
    }

    guardarValor(evento){
        this.setState(
            {
                valorInput: evento.target.value
            },
            () => this.props.filtroPeliculas(this.state.valorInput)
        )
    }

    render(){
        return(
            <>
            <form onSubmit= {(evento)=> this.evitarSubmit (evento)} action="resultados.html" method="get" className="formulario">
            <label for="" className="palabraBuscador">Buscar pelicula o serie:   </label>
            <input onChange={(evento)=> this.guardarValor (evento)} type="text" name="busqueda" value="" />
            <button type="submit">Buscar</button>
            </form>
            </>
        )
    }
}

export default BuscadorForm