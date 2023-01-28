import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/footer.component";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, presistor } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={presistor}>    
    <BrowserRouter>   
          <App />
      <Footer />
    </BrowserRouter>
    </PersistGate>
    </Provider> 
  </React.StrictMode>
);


reportWebVitals();
