import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  {
    /* info: inital state */
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
