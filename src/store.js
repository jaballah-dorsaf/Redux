import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

const something = (store) => (next) => (action) => {
  console.log(action, store.getState());
  next(action);
  console.log(action, store.getState());
};

const Store = createStore(rootReducer, applyMiddleware(something));

export default Store;
