import React, { createContext,useState } from "react";
import all_product from '../components/Assets/all_product.js';
import CartItems from "../components/CartItems/CartItems.jsx";

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let Cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        Cart[index]=0
    }
    return Cart;
}
export const ShopContextProvider = (props)=>{
    const [CartItems,setCartItem]=useState(getDefaultCart());
   

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(CartItems);
    }
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * CartItems[item];
                }
            }
        }
    
        return totalAmount;
    };
    
    const getTotalCartItems = () =>{
        let totalitem=0;
        for(const item in CartItems){
            if(CartItems[item]>0)
            {
                totalitem+=CartItems[item]
            }
        }
        return totalitem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,CartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
