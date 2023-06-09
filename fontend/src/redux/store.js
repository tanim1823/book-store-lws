import { applyMiddleware, createStore } from "redux";
import thunkMiddlewares from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddlewares))
);

export default store;
