import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});

let preloadedState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
