import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./frontend/hooks/context/filterContext";
import { ProductContextProvider } from "./frontend/hooks/context/productsContext";
import { AuthContextProveder } from "./frontend/hooks/context/authContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProveder>
      <ProductContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ProductContextProvider>
    </AuthContextProveder>
  </BrowserRouter>
);
