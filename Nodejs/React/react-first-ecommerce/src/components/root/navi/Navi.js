import React, { Component } from 'react'
import "./Navi.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from "../../../redux/actions/categoryActions"
import * as productActions from "../../../redux/actions/productActions"
import { removeFromCart } from "../../../redux/actions/cartActions"
import CategoryBar from '../../toolbox/categoryBar/CategoryBar';


class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = { cartMenuStatus: false };
  }




  // Handler Functions
  accountBox_enter = (event) => {
    this.setState({ cartMenuStatus: true })
  }

  accountBox_leave = (event) => {
    this.setState({ cartMenuStatus: false })
  }

  cartBox_handler = (event) => {
    console.log(event.target);
  }



  // Components
  cartMenu() {
    return (
      <div className="userSideAccountBox" onMouseLeave={this.accountBox_leave}>
        <ul >

          <li>
            <Link to="/myOrders">Siparislerim</Link>
          </li>

          <li>
            <Link to="/myAccount">Hesabım</Link>
          </li>
          <br />

          <li>
            <Link to="/likes">Favorilerim</Link>
          </li>

          <br />

          <li>
            <Link to="/logout">Cikis yap</Link>
          </li>

        </ul>
      </div>
    )
  }

  searchBox() {
    return (
      <form action="/ara" >
        <div className="searchBox">
          <div className="searchIcon"><i className="fas fa-search"></i></div>
          <div className="searchInput-container">
            <input className="searchInput" name="q" minLength="3" type="text" placeholder="Ürün,kategori veya marka Ara "></input>
          </div>
          <button type="submit" value="Submit" className="searchButton">ARA</button>
        </div>
      </form>
    )
  }

  accountBox() {
    return (

      <div onMouseEnter={this.accountBox_enter} className="userBox accountBox">

        <div className="userSide-AccountIcon">
          <i className="far fa-user"></i>
        </div>
        <div className="userSide-Account">
          <p className="myAccount-account">Hesabım</p>
          <div className="myAccount-account-name">Ahmet Levent</div>
        </div>
        <div className="userSide-DropdownIcon">
          <i className="fas fa-caret-down"></i>
        </div>
        {this.state.cartMenuStatus ? this.cartMenu() : undefined}

      </div>
    )
  }

  cartBox() {
    return (

      <div onClick={this.cartBox_handler} className="userBox cartBox">
        <div className="cartBox-CartIcon">
          <div className="cartBox-CountContainer">
            <p className="cartBox-CartCount" >{this.props.cart.length}</p >
          </div>
          <i className="fas fa-shopping-cart"></i>
        </div>

        <div className="cartBox-MyCart">
          <p>Sepetim</p>
        </div>
      </div>
    )
  }

  colorfulLine() {
    return (
      <div className="colorfulLine-container">
        <div className="colorful colorful-purple"></div>
        <div className="colorful colorful-blue"></div>
        <div className="colorful colorful-orange"></div>
        <div className="colorful colorful-lightOrange"></div>
        <div className="colorful colorful-darkPurple"></div>
        <div className="colorful colorful-turquoise"></div>

      </div>
    )
  }

  // Render
  render() {
    return (
      <nav className="navBar">
        <div className="container">

          <div className="headerBox">
            <div ><Link className="headerText" to="/">hepsiburada</Link></div>
          </div>

          <div>
            {this.searchBox()}
          </div>

          <div className="userSide">
            {this.accountBox()}
            {this.cartBox()}
          </div>
        </div>

        <div className="colorfulLine">
          {this.colorfulLine()}
        </div>

        <div className="categoryBar">
          {<CategoryBar></CategoryBar>}
        </div>

      </nav>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
    cart: state.cartReducer
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      removeFromCart: bindActionCreators(removeFromCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi)