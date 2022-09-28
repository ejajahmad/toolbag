import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <App />
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
