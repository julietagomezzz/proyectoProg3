import { Component } from "react";
import { Link } from "react-router-dom";
import './styles.css'

class BuscadorForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          search: "", 
          resultados: [] 
        };
      }
    
      evitarSubmit(evento) {
        evento.preventDefault()
      }
    
      controlarCambios(evento) {
        this.setState(
          {
            search: evento.target.value
          }
        );
      }
    
    
      render() {
        return (
          <div className="formulario">
            <form className="palabraBuscador" onSubmit={(evento) => this.evitarSubmit(evento)} >
              <input 
                type="text"
                placeholder="Buscar..."
                onChange={(evento) => this.controlarCambios(evento)} value={this.state.search}
              />
              {/* <input type= 'submit' value= 'Submit' /> */}
              <Link to={`/search/${this.state.search}`} className="button">Buscar</Link>
            </form>
          </div>
    
        );
      }
    
    
    }
    
export default BuscadorForm