import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers/index";
import thunk from "redux-thunk";

const enhancers = [];
const initState = {};

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

const store = createStore(rootReducer, initState, composedEnhancers);

export default store;
