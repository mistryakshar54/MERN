import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/ProductsReducer";
import MiniCartReducer from './reducers/MiniCartReducer';
import CoreReducer from "./reducers/CoreReducer";
const combinedReducer = combineReducers({
  ProductsReducer,
  MiniCartReducer,
  CoreReducer
});

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;
