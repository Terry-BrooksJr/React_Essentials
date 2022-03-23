import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function DarkApp() {
  return <h1>This is the second app</h1>;
}
ReactDOM.render(
  <>
    <App />
    <DarkApp />
  </>,
  document.getElementById("root")
);
