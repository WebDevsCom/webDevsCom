import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);

serviceWorker.register({
  onUpdate: (registration) => {
    alert("New version is available!, please update?");
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
    window.location.reload();
  },
});
