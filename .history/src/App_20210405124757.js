import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import ShopCart from './pages/ShopCart'

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:pageName" component={Home} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/" component={ShopCart} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
