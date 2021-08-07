import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import Routes from "./Routes";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ChakraProvider>
      <Box w="100%" minH="100vh" background="gray.50">
        <BrowserRouter>
          <Routes />
          <ToastContainer
            transition={Slide}
            hideProgressBar
            bodyClassName="toast-text"
          />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
