import {createContext, useEffect, useState } from "react";
import  { food_list } from "../assets/db.js"

export const StoreContext=createContext(null)

const StoreContextProvider = ({children}) => {
             
    const [cartItem,setCartItem]=useState({});
    const [totalAmount,setTotalAmount]=useState(0);

     const addToCart = (itemId) =>{
         if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
         }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
         }
     }

     const removeFromCart =(itemId) => {
         setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
         console.log("itemId",itemId)
     }
     console.log("cartitem",cartItem)

     const getTotalCartAmount = (cartItem, food_list) => {
      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          const itemInfo = food_list.find((product) => product._id === item);
           setTotalAmount((prev)=>prev+itemInfo.price * cartItem[item]);
        }
      }
      return totalAmount; 
    };
    

      const contextValue ={
         food_list,
         cartItem,
         setCartItem,
         addToCart,
         removeFromCart,
         getTotalCartAmount
      }
      // useEffect(()=>{
      //    console.log(cartItem);
      // },[cartItem])

return(
      <StoreContext.Provider value={contextValue}>
             {children}
      </StoreContext.Provider>
)
}

export default StoreContextProvider