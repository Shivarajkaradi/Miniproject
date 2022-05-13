/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Item_card from "../components/Item_card";
import {CartProvider} from "react-use-cart";

import tshirt1 from "../components/pics/mw.jpg";
import tshirt2 from "../components/pics/blue.jpg";
import tshirt3 from "../components/pics/green.jpg";
import tshirt10 from "../components/pics/tshirt1.jpg";
import tshirt5 from "../components/pics/mr.jpg";
import tshirt12 from "../components/pics/rbss.jpg";
import tshirt7 from "../components/pics/virat_kit.jpg";
import tshirt8 from "../components/pics/key_chain.jpg";
import tshirt9 from "../components/pics/cap.jpg";
import tshirt4 from "../components/pics/cup.jpg";
import tshirt11 from "../components/pics/bag.jpg";
import tshirt6 from "../components/pics/bag_2.jpg";





const Data =()=> {

    const Mens_data={    

Mens_productData:
[
        {
            id: "1",
            price: 250,
            desc:"",
            image:tshirt1,
        },
        {
            id: "2",
            price: 350,
            desc:"",
            image:tshirt2,
        },
        {
            id: "3",
            price: 350,
            desc:"",
            image:tshirt3,
        },
        {
            id: "4",
            price: 250,
            desc:"",
            image:tshirt5,
        },
        {
            id: "5",
            price: 225,
            desc:"",
            image:tshirt4,
        },
        {
            id: "6",
            price: 25,
            desc:"",
            image:tshirt6,
        },
        {
            id: "7",
            price: 550,
            desc:"",
            image:tshirt7,
        },
        {
            id: "8",
            price: 50,
            desc:"",
            image:tshirt8,
        },
        {
            id: "9",
            price: 150,
            desc:"",
            image:tshirt9,
        },
        {
            id: "10",
            price: 150,
            desc:"",
            image:tshirt10,
        },
        {
            id: "11",
            price: 600,
            desc:"",
            image:tshirt11,
        },
        {
            id: "12",
            price: 450,
            desc:"",
            image:tshirt12,
        },

],
    };
return (
    <>
    <h1 className="text-center mt-3"> </h1>
    <section className="py-4 container">
        <div className="row justify-content-center">
           {Mens_data.Mens_productData.map((item,index)=>{
               return(
                   <CartProvider>
                   <Item_card img={item.image}  desc={item.desc} item={item} price={item.price} key={index}/>
                   </CartProvider>
                   )     
   })}
   
        </div>
   
   
    </section>
    
    
    </>
     )
}
export default Data;