import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./componets/navigation/Navbar";
import Carrousel from "./componets/navigation/carrousel";
import Ondemand from "./componets/pages/Ondemand";
import Inspirados from "./componets/pages/Inspirados";
import Nosotros from "./componets/pages/Nosotros";
import ItemListContainer from "./componets/Container/ItemListContainer";
import Footer from './componets/Footer/Footer'
import ItemDetailContainer from "./componets/Container/ItemDetailContainer";
import Cart from "./componets/Cart/Cart";
import {CartContext} from './componets/Context/CartContext';
import "./App.css";



function App() {
  return (
    
    <div className="App">
      < CartContext>
      <Router>
          <Navbar />
          <Carrousel />
        
        <Switch>
          <Route path="/ItemListContainer" exact component={ItemListContainer} />
          <Route path="/category/:idCategory" exact component={ItemListContainer} />
          <Route path="/detalle/:idDetalle" exact component={ItemDetailContainer} />
          <Route path="/ondemand" exact component={Ondemand} />
          <Route path="/Inspirados" exact component={Inspirados} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/Cart" exact component={Cart} />
          <ItemListContainer />
        </Switch>
        <Footer/>
        </Router>
      </CartContext>
      </div>
  );
}

export default App;
