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
            resultadosPelis: [],
            resultadosSeries: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.search}`, options)
            .then((response) => response.json())
            .then((resultados_busqueda) =>
               this.setState({
                resultadosPelis: resultados_busqueda.results
                }
            )
            )
            .catch(error => console.log(error));
            fetch(`https://api.themoviedb.org/3/search/tv?query=${this.state.search}`, options)
            .then((response) => response.json())
            .then((resultados_busqueda) =>
               this.setState({
                resultadosSeries: resultados_busqueda.results
                }
            )
            )
            .catch(error => console.log(error));    
    }
    

    render() {
        return (
            <>
               
                {
                    this.state.resultadosPelis.length > 0 ?
                        <ul className="ulBusqueda">
                        {
                            this.state.resultadosPelis.map((resultado) => 
                            <section className="cajapadre" id="peliculasPopu">
                            <Peliculas 
                            id={resultado.id} 
                            nombre={resultado.title} 
                            imagen={resultado.poster_path} 
                            descripcion={resultado.release_date} 
                            resumen={resultado.overview}
                             />
                             </section>
                             
                            )                        
                        }
                        </ul> : this.state.resultadosSeries.length > 0 ?
                        <ul className="ulBusqueda">
                        {
                            this.state.resultadosSeries.map((resultado) => 
                                <section className="cajapadre" id="peliculasPopu">

                                <Series 
                                id={resultado.id} 
                                nombre={resultado.name} 
                                imagen={resultado.poster_path} 
                                descripcion={resultado.first_air_date} 
                                resumen={resultado.overview}
                                />
                                </section>
     
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