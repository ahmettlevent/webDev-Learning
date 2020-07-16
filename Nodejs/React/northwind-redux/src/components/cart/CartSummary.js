import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import * as cartActions from "../../redux/actions/cartActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'




class CartSummary extends Component {

  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product)
    console.log(product);
  }

  renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet
              </DropdownToggle>

        <DropdownMenu right>
          {this.props.cart.map(product => (
            <DropdownItem key={product.product.id}>
              {product.product.productName}
              <Badge color="success" >{product.quantity}</Badge>
              <Badge color="danger" onClick={() => { this.removeFromCart(product.product) }}>Sepetten Çıkar</Badge>
            </DropdownItem>
          ))}

          <DropdownItem>
            <Link to="/cart">Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>

      </UncontrolledDropdown>
    )
  }

  render() {

    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : "Sepetiniz Boş"}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)
