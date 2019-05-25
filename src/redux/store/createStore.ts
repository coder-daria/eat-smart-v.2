import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; 
  }
}

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  let store = createStore(
    reducers,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
      module.hot.accept("../reducers", () => {
        store.replaceReducer(reducers);
      });
  };

  return store;
};

export default configureStore;
