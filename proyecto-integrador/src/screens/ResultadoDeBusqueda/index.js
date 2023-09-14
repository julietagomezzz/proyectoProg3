import React, { Component } from "react";
import './styles.css'
import Peliculas from "../../components/Peliculas/Peliculas";
import Series from "../../components/Series/Series";
import BuscadorForm from "../../components/Buscador/BuscadorForm";
import { options } from "../../utils/constants";


class ResultadoDeBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.match.params.search,
            resultados: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.search}`, options)
            .then((response) => response.json())
            .then((resultados_busqueda) =>
               this.setState({
                    resultados: resultados_busqueda.results
                }
            )
            )
            .catch(error => console.log(error));
    }
    

    render() {
        return (
            <>
                <BuscadorForm/>
                {
                    this.state.resultados.length > 0 ?
                        <ul className="ulBusqueda">
                        {
                            this.state.resultados.map((resultado) => 
                            <Peliculas 
                            id={resultado.id} 
                            nombre={resultado.title} 
                            imagen={resultado.poster_path} 
                            descripcion={resultado.release_date} 
                            resumen={resultado.overview}
                             />
                            )                        
                        }
                        </ul> :
                        <h3>Loading..</h3>
                }
            </>
        )
    }
}

export default ResultadoDeBusqueda;