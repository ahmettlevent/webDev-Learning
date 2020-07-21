import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./ProductList.css"
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'

class ProductList extends Component {
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product: product })
  }
  render() {
    return (
      <div className="productListBar">
        <h3>{this.props.currentCategory}</h3>
        <table>
          <thead>
            <tr className="productContainer">
              <td>Ürün Adı</td>
              <td>Birim Basına Miktar</td>
              <td>Birim Fiyatı</td>
              <td>Stok</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id} className="productContainer">
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><button onClick={() => { this.addToCart(product) }}>Karta Ekle</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStatesToProps(state) {
  return {
    products: state.productListReducer,
    currentCategory: state.changeCategoryReducer.categoryName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(ProductList)