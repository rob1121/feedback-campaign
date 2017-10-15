
import { createStore, combineReducers } from "redux";
import setting from "../reducers/settingReducer";
import { routerReducer } from 'react-router-redux'
const middleware = routerMiddleware(history)
export default createStore(
  combineReducers({
    setting,
    routing: routerReducer
  }), {});