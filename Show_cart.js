import React from "react";


import Cart from "./Cart"
import {CartProvider} from "react-use-cart"
function Show_cart() {

  return(
    <>
    
    <CartProvider>
    <Cart/>
    </CartProvider>
    </>
  )
}

export default Show_cart;