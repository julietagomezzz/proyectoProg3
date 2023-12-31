import { Switch, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home'
import DetallePelicula from './screens/DetallePelicula'
import DetalleSerie from './screens/DetalleSerie'
import Peliculas from "./screens/Peliculas"
import Series from "./screens/Series"
import Favoritos from './screens/Favoritos'
import NotFound from './screens/NotFound'
import ResultadoDeBusqueda from './screens/ResultadoDeBusqueda'
import BuscadorFilter from './components/BuscadorFilter/BuscadorFilter'

function App() {
  return (
    <>
    < Header />
    <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/DetallePelicula/id/:id'} component={DetallePelicula} />
        <Route path={'/DetalleSerie/id/:id'} component={DetalleSerie} />
        <Route path={'/Peliculas'} component={Peliculas} />
        <Route path={'/Series'} component={Series} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path="/search/:search" component = {ResultadoDeBusqueda}/>
        <Route component={NotFound}/>
      </Switch>
      
    < Footer />
    </>
  );
}

export default App;