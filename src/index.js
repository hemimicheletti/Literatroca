import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Providers>
      <React.StrictMode>
        <ChakraProvider resetCSS>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </Providers>
  </BrowserRouter>
);
