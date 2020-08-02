import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import Routes from "./Routes";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer
        transition={Slide}
        hideProgressBar
        bodyClassName="toast-text"
      />
    </BrowserRouter>
  );
}

export default App;
