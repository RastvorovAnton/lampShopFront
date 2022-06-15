import React from "react";
import { Routes, Route } from "react-router-dom";
import StarterStore from "./StarterStore/StarterStore";
import SignIn from "./HeadersComponents/SignIn/SignIn";
import SignUp from "./HeadersComponents/SignUp/SignUp";
import Cart from "./HeadersComponents/Cart/Cart";
import Product from "./StarterStore/Product/Product";

const RoutesComponent = () => {

  return (
    <div>
      <Routes>
        <Route path='/starter-store' element={<StarterStore />} />
        <Route path='/' element={<StarterStore />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='starter-store/:id' element={<Product />} />
      </Routes>
    </div>
  )
}

export default RoutesComponent