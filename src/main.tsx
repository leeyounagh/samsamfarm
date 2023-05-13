import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "normalize.css";
import { decodeToken } from "react-jwt";
import { setUser } from "./slice/UserSlice";

if (localStorage.jwtToken) {
  store.dispatch(setUser(decodeToken(localStorage.JWtToken)));
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
