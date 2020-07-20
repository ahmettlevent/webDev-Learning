import React from 'react';
import './App.css';
import Navi from '../../navi/Navi';
import { Switch, Route } from 'react-router-dom';
import ResultPage from '../resultPage/ResultPage';
import ProductList from '../../productList/ProductList';

function App() {
  return (
    <div className="App">
      <Navi isLogged={true} />
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/ara" exact component={ResultPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
