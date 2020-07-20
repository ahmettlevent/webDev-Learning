import React from 'react';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/productDetail/:productId" component={AddOrUpdateProduct}></Route>
        <Route path="/productDetail" component={AddOrUpdateProduct}></Route>
        <Route path="/cart" exact component={CartDetail} />
        <Route component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
