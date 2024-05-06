import React, { useContext } from 'react'
import { useState } from 'react'

import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext)
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [streetname,setStreet]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [zipcode,setZipcode]=useState("");
  const [country,setcountry]=useState("");
  const [phone,setPhone]=useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const collectData = async (e) =>{
    e.preventDefault();
    let result = await fetch('http://localhost:4002/senddata',{
      method:'post',
      body:JSON.stringify({data:{firstname,lastname,email,streetname,city,state,zipcode,country,phone}}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json();
    localStorage.setItem("userinfo",JSON.stringify(result));
    setShowLogin(false);
  }
  return (
    <form className='place-order' onSubmit={collectData}>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' required
          value={firstname}
          onChange={(e)=>setFirstName(e.target.value)}/>
          <input type="text" placeholder='Last name' required
          value={lastname}
          onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <input type="email" placeholder='Email address' required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Street' required
        value={streetname}
        onChange={(e)=>setStreet(e.target.value)}/>
        <div className="multi-fields">
          <input type="text" placeholder='City' required
          value={city}
          onChange={(e)=>setCity(e.target.value)}/>
          <input type="text" placeholder='State' required
          value={state}
          onChange={(e)=>setState(e.target.value)}/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' required
          value={zipcode}
          onChange={(e)=>setZipcode(e.target.value)}/>
          <input type="text" placeholder='Country' required
          value={country}
          onChange={(e)=>setcountry(e.target.value)}/>
        </div>
        <input type="text" placeholder='Phone' required
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div className="place-order-right">
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
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button>PROCCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
