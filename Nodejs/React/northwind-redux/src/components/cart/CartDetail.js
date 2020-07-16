import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import * as cartActions from "../../redux/actions/cartActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class CartDetail extends Component {

  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product)
    console.log(product);
  }

  renderSummary = () => {
    return (
      null
    )
  }

  render() {

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity </th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.quantity}</td>
                <td><Button type="danger" onClick={() => { this.removeFromCart(cartItem.product) }}>Karttan Çıkar</Button></td>
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
    cart: state.cartReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)
