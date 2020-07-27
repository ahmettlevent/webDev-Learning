import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ResultPage from '../resultPage/ResultPage';
import ProductList from '../../productList/ProductList';
import Navi from '../navi/Navi';

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
