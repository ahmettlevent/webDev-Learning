import React, { Component } from 'react'
import "./ResultPage.css"
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from "../../../redux/actions/categoryActions"
// import * as cartActions from "../../../redux/actions/cartActions"


class ResultPage extends Component {
  constructor(props) {
    super(props);

    this.searchText = this.queryHandler()
  }

  componentDidMount() {
    this.props.actions.getCategories()
  }

  queryHandler() {
    const params = new URLSearchParams(this.props.location.search);
    return params.get('q')
  }

  renderResult() {
    return (
      <div>
        {this.searchText}
        {console.log(this.props.categories)}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.queryHandler().length > 2 ? this.renderResult() : <Redirect to="/" />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
    // products: state.productListReducer

  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      // addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage)