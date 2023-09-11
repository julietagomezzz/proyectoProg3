

import { Component } from "react";
import './styles.css'

class BuscadorForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: '',
            movieData:[],
            backup:[]
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
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input onChange={(evento)=> this.guardarValor(evento)} value={this.state.valorInput}/>
                <button type="submit">Buscar</button>
            </form>
            </>
        )
    }
}

export default BuscadorForm