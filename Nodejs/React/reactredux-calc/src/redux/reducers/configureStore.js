import { createStore } from "redux"
import reducers from "./index"

export default function configureSore() {
  return createStore(reducers)
}