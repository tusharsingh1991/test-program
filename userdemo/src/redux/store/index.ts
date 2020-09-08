import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "../reducers";
import thunk from 'redux-thunk';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export default store;