import React from "react";
import { useCart } from "react-use-cart";

const Item_card=(props)=>{

    const {addItem}= useCart();

    return(
<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
<div class="card p-0 overflow-hidden h-100 shadow bg-primary">
  <img src={props.img} class="card-img-top img-fluid" alt=" "/>
     <div class="card-body text-center">
    <h5 class="card-title text-danger">{props.title}</h5>
    <h5 class="card-text text-white"> Rs.{props.price}.00</h5>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-danger"onClick={()=>addItem(props.item)}>Add to cart</button>
  </div>
</div>
</div>

    )
}
export default Item_card;