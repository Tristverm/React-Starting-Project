import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

let { createRoot } = ReactDOM;

const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(<App />);
