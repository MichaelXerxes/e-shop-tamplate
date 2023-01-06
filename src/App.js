import { Routes,Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import SignInForm from "./routes/sign-in/sign-in-form.component";
import SignUpForm from "./routes/sign-up/sign-up-form.component";


const  App=()=> {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="authentication" element={<Authentication/>}/>
      <Route path="sign-up-form" element={<SignUpForm/>}/>
      <Route path="sign-in-form" element={<SignInForm/>}/>
      </Route>
     
         
    </Routes>
 
  );
};


export default App;


