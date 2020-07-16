import React, { Component } from 'react';
import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import NotFound from './NotFound'
import CartList from './CartList';

import { Container, Row, Col } from "reactstrap"
import Alertify from "alertifyjs"
import { Switch, Route } from 'react-router-dom';
import FormDemo from './FormDemo';
import GithubMost from './GithubMost';
import FormDemo2 from './FormDemo2';


export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id)

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 })
    }

    this.setState({ cart: newCart })

    Alertify.success(product.productName + " added to Cart", 2)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    Alertify.notify(product.productName + " removed from Cart", 'error', 2);
  }

  render() {
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} ></Navi>

          <Row>
            <Col xs="2"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} /></Col>
            <Col xs="10">
              <Switch>

                <Route exact path="/" render={props => (
                  <ProductList {...props} addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} />)} />

                <Route exact path="/cart" render={props => (<CartList {...props} cart={this.state.cart} removeFromCart={this.removeFromCart} />)}></Route>

                <Route path="/form" component={FormDemo}></Route>
                <Route path="/form2" component={FormDemo2}></Route>


                <Route path="/github" component={GithubMost}></Route>

                <Route component={NotFound}></Route>

              </Switch>


            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}
