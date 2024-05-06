import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartItem, food_list, removeFromCart ,getTotalCartAmount} = useContext(StoreContext)
 
  const  navigate=useNavigate();  
  const [amountTotal,setAmountTotal]=useState(0)  
  let amount=0
  useEffect(()=>{
    amount = getTotalCartAmount(cartItem,food_list)
    console.log("amount in cart"+amount)
    setAmountTotal(amount)
  },[amount])

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className='cart-item-title cart-items-item'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>{item.price * cartItem[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          }
          )
        }
      </div>
            <div className="cart-bottom">
              <div className="cart-total">
                <h2>Cart Toatals</h2>
                <div>
                  <div className="cart-total-details">
                    <p>SubTotals</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0?0:2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                  </div>
                  <hr />
                </div>
                <button onClick={()=>navigate('/order')}>PROCCEED TO CHECKOUT</button>
              </div>
               <div className="cart-promocode">
                   <div>
                     <p>If you have a promo code, Enter it here</p>
                      <div className="cart-promocode-input">
                         <input type="text" placeholder='promo code' />
                         <button>Submit</button>
                      </div>
                   </div>
               </div>
            </div>
       </div>
  )
}

export default Cart
