import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from "../../../redux/actions/categoryActions"
import * as productActions from "../../../redux/actions/productActions"

class CategoryBar extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  changeProducts(category) {
    this.props.actions.getProducts(category)
  }

  render() {
    return (
      <div className="categories-container">
        <ul>
          {this.props.categories.map(category => (
            <li key={category.id}>
              <p onClick={() => { this.props.actions.changeCategory(category); this.changeProducts(category.id) }}>{category.categoryName}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar)