import React from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
