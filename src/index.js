import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/footer.component";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    
        <CategoriesProvider>
          <CartProvider>
          <App />
          </CartProvider>      
        </CategoriesProvider>
     
      <Footer />
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);


reportWebVitals();
