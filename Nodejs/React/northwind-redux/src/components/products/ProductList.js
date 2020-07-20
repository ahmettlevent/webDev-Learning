import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import { connect } from 'react-redux'
import { Table, Button } from 'reactstrap'
import alertify from "alertifyjs"
import { Link } from 'react-router-dom'

class ProductList extends Component {
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(product.productName + " Sepete Eklendi")
  }
  render() {
    return (
      <div>
        <h3>Product List - {this.props.currentCategory.categoryName} - {this.props.products.length}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stocks</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td><Link to={"/productDetail/" + product.id}>{product.productName}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button type="success" onClick={() => { this.addToCart(product) }}>Karta Ekle</Button></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
    products: state.productListReducer

  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)