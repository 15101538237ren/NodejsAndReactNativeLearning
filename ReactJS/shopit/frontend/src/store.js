import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducers";
const reducer = combineReducers({ products: productReducer });

let preloadedState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;