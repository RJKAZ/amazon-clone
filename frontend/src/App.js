import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">Amazona</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      


      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
