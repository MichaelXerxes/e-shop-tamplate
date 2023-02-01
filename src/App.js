import { Routes,Route, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import SignInForm from "./routes/sign-in/sign-in-form.component";
import SignUpForm from "./routes/sign-up/sign-up-form.component";
import TestDisplay from "./routes/test-display/test-display.component";
import CheckOut from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { getCurrentUser } from "./utils/fire-base/fire-base.utils";
import { setCurrenUser } from "./store/user/user.action";
import { checkUserSession } from "./store/user/user.action";



const  App=()=> {

  const dispatch=useDispatch();

  useEffect(() => {
    // getCurrentUser();//.then((user)=>console.log('Current User Check', user));
    dispatch(checkUserSession);

    
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="authentication" element={<Authentication/>}/>
      <Route path="sign-up-form" element={<SignUpForm/>}/>
      <Route path="sign-in-form" element={<SignInForm/>}/>
      <Route path="test-display" element={<TestDisplay/>}/>
      <Route path="checkout" element={<CheckOut/>}/>
      </Route>
     
         
    </Routes>
 
  );
};


export default App;


