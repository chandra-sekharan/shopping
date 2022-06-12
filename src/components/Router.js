import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Content from './Content';
import Profile from './Profile';
import Signup from './Signup';
import Signin from "./Signin";
import Cart from "./Cart";

 const Router = ({kart , handleaddproduct, product}) =>{

    return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/content' element={<Content handleaddproduct={handleaddproduct} product={product} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/carting" element={<Cart kart={kart}/>} />
      </Routes>
    </BrowserRouter>
    
 );
}
export default Router;