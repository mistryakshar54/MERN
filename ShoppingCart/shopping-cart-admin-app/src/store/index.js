import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CoreReducer from "./reducers/CoreReducer";
const combinedReducer = combineReducers({
  CoreReducer,
});

// const store = createStore(combinedReducer, applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
