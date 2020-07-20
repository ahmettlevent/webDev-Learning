import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
      console.log(url);
    }
    return fetch(url)
      .then(res => res.json())
      .then(res => dispatch(getProductsSuccess(res)))
  }
}