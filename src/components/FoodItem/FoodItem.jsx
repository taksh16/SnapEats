import React, { useContext, useState } from 'react'
import './FoodItem.css'
import rating from "../../assets/rating_starts.png"
import { assets } from '../../assets/db';
import { StoreContext } from '../../context/StoreContext';

function FoodItem({id,name,price,description,image,category}) {
  const {cartItem,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-item'>
         <div className="food-item-img-container">
             <img  className='food-item-image' src={image} alt="" />
             {
                 !cartItem[id]
                   ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                   :<div className="food-item-counter">
                      <img  onClick={()=>removeFromCart(id)}src={assets.remove_icon_red}alt="" />
                      <p>{cartItem[id]}</p>
                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
             }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={rating} alt=""/>
            </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
    </div>
  )
}

export default FoodItem
