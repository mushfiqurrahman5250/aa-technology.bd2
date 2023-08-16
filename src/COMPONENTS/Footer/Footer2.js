import React from "react";

import logo from "../../ASSETS/logo.png";

import "./Footer2.css";
import { Link } from "react-router-dom";

import './Footer2.css';

// gallary---------------------------------
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Footer2 = () => {

  
  return (
    <>
<div className="member">
  <h2>OUR PARTNERS</h2>
  <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         <img src="https://i.ibb.co/XJQ9PMp/logo.png" alt="" width="230" height="100"></img>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src="https://i.ibb.co/XJQ9PMp/logo.png" alt="" width="230" height="100"></img>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src="https://i.ibb.co/XJQ9PMp/logo.png" alt="" width="230" height="100"></img>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src="https://i.ibb.co/XJQ9PMp/logo.png" alt="" width="230" height="100"></img>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src="https://i.ibb.co/XJQ9PMp/logo.png" alt="" width="230" height="100"></img>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            30.11.2022
          </span>
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src="https://i.ibb.co/XJQ9PMp/logo.png" alt="" width="230" height="100"></img>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            30.11.2022
          </span>
        </div>
      </a>
    </div>

  

   

  </div>
</div>
  
</div>

    {/* .............end......... */}
   
     <div className="gallary">
      <h2 >AWARDS</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/71y7Ghb/IMG-20230726-0013.jpg" alt="IMG-20230726-0005" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/71y7Ghb/IMG-20230726-0013.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/71y7Ghb/IMG-20230726-0013.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/71y7Ghb/IMG-20230726-0013.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/TYFMp1L/IMG-20230726-0015.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/71y7Ghb/IMG-20230726-0013.jpg" />
        </SwiperSlide>
      </Swiper>

      

     </div>


   
      <div className="footer">
        <div className="footerin1">
          <div className="f1">
            <img src={logo} alt="logo" className="logo" />
            <p>
              AA Technology Ltd. is an Information Technology Servicing Company.
            </p>
            {/* <img src={social} alt='social' className='social' /> */}
          </div>
          <div className="f2">
            <h3>About Us</h3>
            <Link to="/about" className="stylenone">
              <p>About us</p>
            </Link>
            <Link to="/contact" className="stylenone">
              <p>Contact us</p>
            </Link>
            <p>About team</p>
            <p>Customer Support</p>
          </div>
          <div className="f2">
            <h3>Our Information</h3>
            <Link to="/privacypolicy" className="stylenone">
              <p>Privacy policy</p>
            </Link>
            <Link to="/termsandconditions" className="stylenone">
              <p>Terms & conditions</p>
            </Link>
            <p>Return Policy</p>
            <p>Site Map</p>
          </div>
          <div className="f2">
            <h3>Community</h3>
            <p>Announcements</p>
            <p>Answer center</p>
            <p>Discussion boards</p>
            <p>Giving works</p>
          </div>
          {/* <div className='f2'>
          <h3>Subscribe Now</h3>
          <p>Subscribe your email for newsletter and featured news based on your interest</p>
          <div className='inputcontainer'>
            <span className='icon1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>

            </span>
            <input type='text' placeholder='Enter your email' />
            <span className='icon2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>

            </span>
          </div>
        </div> */}
        </div>
        <div className="footerin2">
          <div className="headaddress">
            {" "}
            <h2>Head Office</h2>
            <p>
              AA TECHNOLOGY LIMITED <br></br>
              Plot 10, Block E, Main Road, Banasree, Dhaka-1219<br></br>
              Email: support@aatech.com.bd<br></br>
              Hotline: +8809666781444
            </p>
          </div>
          <div className="branchaddress">
            {" "}
            <h2>Branch Office</h2>
            <p>
              AA TECHNOLOGY LIMITED <br></br>
              Bhulta, Rupgonj, Narayanganj, Bangladesh<br></br>
              Email: support@aatech.com.bd<br></br>
              Hotline: +8809666781444
            </p>
          </div>
          <h3>© Copyright 2023 AA-Technology, Inc. All rights reserved</h3>
        </div>
      </div>
    </>
  );
};

export default Footer2;
