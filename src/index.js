import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { UserProvider } from "./contexts/user.context";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/footer.component";
import { ProductProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
          <App />
          </CartProvider>      
        </ProductProvider>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
