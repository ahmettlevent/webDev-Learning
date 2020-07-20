import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./ProductList.css"

class ProductList extends Component {
  render() {
    return (
      <div className="productListBar">
        <div className="productContainer">
          <div className="productImage"><img alt="ProductImage" width="123px" src="https://images.tisort.ist/security-tisort-sari.jpg"></img></div>
          <div className="productName">Product Name</div>
        </div>
      </div>
    )
  }
}


function mapStatesToProps(state) {
  return {
    products: state.productListReducer
  }
}

export default connect(mapStatesToProps)(ProductList)