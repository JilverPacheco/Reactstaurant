import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
