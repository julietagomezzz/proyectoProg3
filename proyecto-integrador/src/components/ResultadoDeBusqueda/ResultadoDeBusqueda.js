import React, { Component } from 'react';
import BuscadorForm from '../Buscador/BuscadorForm';
import PeliculasContainer from '../PeliculasContainer/PeliculasContainer';
import SeriesContainer from '../SeriesContainer/SeriesContainer';
import './styles.css'


class ResultadoDeBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.match.params.search,
            resultados: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?${this.state.search}`)
            .then((response) => response.json())
            .then((resultados_busqueda) =>
                this.setState({
                    resultados: resultados_busqueda.data
                }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <BuscadorForm />
                {
                    this.state.resultados.length > 0 ?
                    <div className='cajaPadre'>
                        <ul className='cajaPadre'>
                            <PeliculasContainer
                                album={false}
                                value={this.state.resultados.map(resultado => ({
                                    id: resultado.id,    
                                    nombre: resultado.title,
                                    imagen: resultado.poster_path,
                                    resumen: resultado.overview
                                }))}
                            />
                            <SeriesContainer
                                album={false}
                                value={this.state.resultados.map(resultado => ({
                                    id: resultado.id,      
                                    nombre: resultado.name,
                                    imagen: resultado.poster_path,
                                    resumen: resultado.overview
                                }))}
                            />
                        </ul>
                        </div> :
                        <h3>Loading..</h3>
                }
                <BuscadorForm />
            </>
        )
    }
}

export default ResultadoDeBusqueda;