import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Provider store={store}>
    <App />
  </Provider>
);
