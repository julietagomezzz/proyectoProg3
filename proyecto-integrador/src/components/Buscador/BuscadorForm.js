import { Component } from "react";

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
            () => this.props.filtrarPersonajes(this.state.valorInput)
        )
    }

    render(){
        return(
            <>
            <form action="resultados.html" method="get" className="formulario">
            <label for="" className="palabraBuscador">Buscar pelicula o serie:</label>
            <input type="text" name="busqueda" value="" />
            <button type="submit">Buscar</button>
            </form>
            </>
        )
    }
}

export default BuscadorForm