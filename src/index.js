import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/footer.component";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    
        
          <CartProvider>
          <App />
          </CartProvider>      
        
     
      <Footer />
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);


reportWebVitals();
