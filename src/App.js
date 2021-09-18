import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./componets/navigation/Navbar";
// import Inicio from "./componets/pages/Inicio";
// import Productos from "./componets/pages/Productos";
import Ondemand from "./componets/pages/Ondemand";
import Inspirados from "./componets/pages/Inspirados";
import Nosotros from "./componets/pages/Nosotros";
import ItemListContainer from "./componets/Container/ItemListContainer";
import Footer from './componets/Footer/Footer'
// import ItemDetail from "./componets/itemDetail/ItemDetail";
import ItemDetailContainer from "./componets/Container/ItemDetailContainer";
import Cart from "./componets/Cart/Cart";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/ItemListContainer" exact component={ItemListContainer} />
          {/* <Route path="/productos" exact component={Productos} /> */}
          <Route path="/category/:idCategory" exact component={ItemListContainer} />
          <Route path="/category/:idCategory" exact component={ItemListContainer} />
          <Route path="/category/:idCategory" exact component={ItemListContainer} />
          <Route path="/detalle/:idDetalle" exact component={ItemDetailContainer} />


          <Route path="/ondemand" exact component={Ondemand} />
          <Route path="/Inspirados" exact component={Inspirados} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/Cart" exact component={Cart} />


          <ItemListContainer />
          <Route path="/ItemDetailContainer" exact component={ItemDetailContainer} />
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
