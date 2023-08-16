import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/HomePage/HomePage'

import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPage';


import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';
import Login from './PAGES/Auth/Login';
import Signup from './PAGES/Auth/Signup';
import ForgotPassword from './PAGES/Auth/ForgotPassword';
import Cart from './PAGES/Cart/Cart';
import UserProfile from './PAGES/User/UserProfile';
import FAQ from './PAGES/Extra/FAQ';
import Termsandconditions from './PAGES/Extra/Termsandconditions';
import PrivacyPolicy from './PAGES/Extra/PrivacyPolicy';
import IpTelephone from './PAGES/IP-Telephone/IpTelephone';
import Networking from './PAGES/Networking/Networking';
import Camera from './PAGES/Camera/Camera';
import Storage from './PAGES/Storage/Storage';
import AudioSystem from './PAGES/AudioSystem/AudioSystem';
import AccessControl from './PAGES/AccessControl/AccessControl';

import Accessories from './PAGES/Accessories/Accessories';
import Solution from './PAGES/Solution/Solution';
import CameraDetails from './PAGES/Camera/CameraDetails/CameraDetails';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        

       
        <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/user/:activepage' element={<UserProfile/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/termsandconditions" element={<Termsandconditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route exact path="/ip-telephone" element={<IpTelephone/>} />
        <Route exact path="/networking" element={<Networking/>} />
        <Route exact path="/camera" element={<Camera/>} />
        <Route exact path="/camera/:id" element={<CameraDetails/>} />
        <Route exact path="/storage" element={<Storage/>} />
        <Route exact path="/audiosystem" element={<AudioSystem/>} />
        <Route exact path="/accesscontrol" element={<AccessControl/>} />
        
        <Route exact path="/accessories" element={<Accessories/>} />
        <Route exact path="/solution" element={<Solution/>} />
        

        

       

        
       

        <Route path="*" element={<div>
          <h1>404 NOT FOUND</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App