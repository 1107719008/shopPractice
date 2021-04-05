import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Shop from './pages/shop'
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:pageName" component={Home} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
