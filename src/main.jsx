import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Parent1 from "./components/Parent1.jsx";
import Parent2 from "./components/Parent2.jsx";
import "./index.css";
import ChildToChild1 from "./components/child-comp-context-api/ChildToChild1.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Parent1/> */}
    {/* <Parent2 /> */}
    {/* <ChildToChild1/> */}
  </React.StrictMode>
);
