import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products/Products";
import Product from "./component/Products/Product";
import Cart from "./component/Cart/Cart";
import login from "./component/login/login";
import registration from "./component/registeration/registration";
import Link from "./component/Links/link";
import contact from "./component/Contact/contact";
import About from "./component/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={registration} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Link/>
    </>
  );
}

export default App;
