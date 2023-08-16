import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="About Us"
        bannerimage= 'https://i.ibb.co/sKDdJ3B/Untitled-7.jpg'
        />
        <div className='pgleft pgcommon'>
            <img src='https://i.ibb.co/sKDdJ3B/Untitled-7.jpg' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>AA Technology Ltd. is an Information Technology Servicing Company, Corporate Headquarter located in Naya Paltan, Dhaka (Capital of Bangladesh) providing service to clients nationwide. We are built on technical and technological know-how. We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.

AA Technology Ltd. belongs to Nannu Group of Companies. Nannu Group started its journey in 1973. It has in these years built long term partnerships with different national and multinational renowned companies and organizations in different fields of specialization to work as associates, enabling it to meet the challenges of time successfully. This adds both extra strength and professional capability to take up ever new challenging jobs with confidence. We are driven by our desire to always create the most fitted solution to every customer. We understand the technologies we work and we know how to implement them in the best possible way.

</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://i.ibb.co/sKDdJ3B/Untitled-7.jpg' alt='noimg' />

            <div>
                <h1>Who are we</h1>
                <p>Currently AA Technology Ltd. provides several hi-tech solution including AHD & IP CCTV System, IP Telephony System, Video Conferencing System, Networking services & Related products, Paging System & IP Based PA System. We are National Distributor of Merit Lilin (35 years experienced IP CCTV manufacturer from Taiwan), Fanvil (Whole range of IP Phone set provider), Yeastar (Providing complete IP PBX solution in easy and smart way), Planet Technology Corporation (Pioneer of IP Innovation, Leading global provider of IP-based networking products and solutions from Taiwan), Vidyo (The Global leader in VIDEO Collaboration from USA), DSPPA (Creating the best, Sounding the world using IP Based PA System), Videonetics (The future of Video computing, who are adding sense to surveillance).</p>

            </div>
        </div>
        <div className='pgleft pgcommon aa'>
            <img src='https://i.ibb.co/2092w9L/aat.png' alt='noimg' />

          
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About