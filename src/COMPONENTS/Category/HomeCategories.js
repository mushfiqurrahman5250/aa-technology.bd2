import React from 'react'
import { Link } from "react-router-dom";
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import img6 from '../../ASSETS/Images/6.png'
import img7 from '../../ASSETS/Images/7.png'
import img8 from '../../ASSETS/Images/8.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> IP Telephony</p>
          <Link to="/Ip-Telephone" class="btn">See More</Link> 
          {/* <a href="/Ip-Telephone" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Camera</p>
          <Link to="/camera" class="btn">See More</Link> 
          {/* <a href="/camera" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Storage</p>
          <Link to="/Storage" class="btn">See More</Link> 
          {/* <a href="/Storage" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Networking</p>
          <Link to="/Networking" class="btn">See More</Link> 
          {/* <a href="/Networking" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
      <div className='container'>
        <img src={img5} alt='img5' />
         <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Audio System</p>
          <Link to="/AudioSystem" class="btn">See More</Link> 
          {/* <a href="/AudioSystem" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
      <div className='container'>
        <img src={img6} alt='img6' />
         <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Access Control</p>
          <Link to="/AccessControl" class="btn">See More</Link> 
          {/* <a href="/AccessControl" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
      <div className='container'>
        <img src={img7} alt='img6' />
         <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Accessories</p>
          <Link to="/Accessories" class="btn">See More</Link> 
          {/* <a href="/Accessories" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
     
      <div className='container'>
        <img src={img8} alt='img8' />
         <div className='content'>
          <h1>
            IT Products At Your doorstep
          </h1>
          <p> Solution</p>
          <Link to="/Solution" class="btn">See More</Link> 
          {/* <a href="/Solution" class="btn">see more</a> */}
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories