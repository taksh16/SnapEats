
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './index.css'
import {Route,Routes} from 'react-router-dom'
import  Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Logipop from './components/LoginPop/Logipop';

function App() {

 const [showLogin,setShowLogin]=useState(false);
  return (
    <>
      {
         showLogin?<Logipop setShowLogin={setShowLogin} />:<></>
      }
      <div className="app">
         <Navbar setShowLogin={setShowLogin}/>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/cart' element={<Cart/>} />
           <Route path='/order' element={<PlaceOrder/>} />
         </Routes>
         <Footer/>
      </div>
    </>
  )
}

export default App
