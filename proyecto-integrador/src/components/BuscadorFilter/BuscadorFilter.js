import React, { Component } from 'react'

export default class BuscadorFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valor: ''
        };
      }
    evitarSubmit(evento){
        evento.preventDefault()
        
      }

    controlarCambios(evento) {
        this.setState(
          {
            valor: evento.target.value
          },
          ()=> this.props.filtrarPeliculas(this.state.valor)
          )
      }

    render() {
        return (
          <>
            <form className="formulario" onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input className="busqueda" placeholder="Buscar..." type="text" onChange={(evento)=>this.controlarCambios(evento)} value={this.state.valor} />
                <button className='button'>Buscar</button>
            </form>
            </>
        )
    }
}