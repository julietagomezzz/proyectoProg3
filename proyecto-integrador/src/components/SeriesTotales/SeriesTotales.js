import React, { Component } from 'react';
import Series from '../Series/Series';
import './styles.css';
import BuscadorFilter from '../BuscadorFilter/BuscadorFilter';

let apiKey = "bfec0622d489778cd408f2f5942ce52d";
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

class SeriesTotales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      filtradas: [], // Inicialmente, mostrar todas las series
      filtroBusqueda: '',
      page: 1,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({
        filtradas: this.props.movies,
      });
    }
  }

  componentDidMount() {
    this.setState({
      filtradas: this.props.movies,
    });
    this.traerSeries();
  }

  traerSeries() {
    fetch(seriesPopulares)
      .then(resp => resp.json())
      .then(data => this.setState({
        series: data.results,
        filtradas: data.results, // Mostrar todas las series al principio
      }))
      .catch(err => console.log(err));
  }

  filtrarPeliculas(title) {
    const filtroMin = title.toLowerCase();
    if (filtroMin === '') {
      // Si el título de búsqueda está vacío, mostrar todas las series
      this.setState({
        filtradas: this.state.series,
        filtroBusqueda: title,
      });
    } else {
      // Filtrar las series según el título de búsqueda
      const seriesFiltradas = this.state.series.filter((serie) =>serie.name.toLowerCase().includes(filtroMin));
      this.setState({
        filtradas: seriesFiltradas,
        filtroBusqueda: title,
      });
    }
  }

  render() {
    return (
      <>
        <BuscadorFilter filtrarPeliculas={(title) => this.filtrarPeliculas(title)} />
        <section className="cajapadre" id="peliculasPopu">
          {this.state.filtradas.length === 0 ? (
            <p>No se encontraron series que coincidan con la búsqueda.</p>
          ) : (
            this.state.filtradas.map((serie) => {
              return (
                <Series
                  key={serie.id}
                  nombre={serie.name}
                  imagen={serie.poster_path}
                  descripcion={serie.first_air_date}
                  id={serie.id}
                  resumen={serie.overview}
                  TraerMasMovies={this.props.TraerMasMovies}
                />
              );
            })
          )}
        </section>
      </>
    );
  }
}

export default SeriesTotales;
