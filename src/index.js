import { createRoot } from "react-dom/client";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./Reducers/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
