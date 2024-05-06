import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/db'
function Logipop({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const collectData = async (e) =>{
    e.preventDefault();
    let result = await fetch('http://localhost:4002/',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result));
    setSuccessMessage("Account created successfully.");

    setShowLogin(false);
  }
  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={collectData}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required
          value={name}
          onChange={(e)=>setName(e.target.value)} />
          }
          <input type="email" placeholder='Your email' required 
          value={email}  
          onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' required 
          value={password}  
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuning, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState==="Sign Up"
          ?<p>Already have account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          :<p>Create a new acoount? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        }
      </form>
    </div>
  )
}

export default Logipop
