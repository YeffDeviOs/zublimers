import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./componets/navigation/Navbar";
import Inicio from "./componets/pages/Inicio";
import Productos from "./componets/pages/Productos";
import Ondemand from "./componets/pages/Ondemand";
import Inspirados from "./componets/pages/Inspirados";
import Nosotros from "./componets/pages/Nosotros";
import ItemListContainer from "./componets/Container/ItemListContainer";
import Footer from './componets/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/productos" exact component={Productos} />
          <Route path="/ondemand" exact component={Ondemand} />
          <Route path="/Inspirados" exact component={Inspirados} />
          <Route path="/nosotros" exact component={Nosotros} />
        </Switch>
      </Router>
      <ItemListContainer greeting={"Bienvenidos a tu nueva compra"} />
      <Footer/>
    </div>
  );
}

export default App;
