import * as actionTypes from "../actions/actionTypes"
import initialStates from "./initialState"

export default function categoryListReducer(state = initialStates.categories, action) {

  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload
    default:
      return state
  }
}