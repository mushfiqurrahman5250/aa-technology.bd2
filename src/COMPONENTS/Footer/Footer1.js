import React from 'react'
import veges from '../../ASSETS/logo1.jpg'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>AA-TECHNOLOGY
                </h1>
                <p>AA Technology Ltd. is an Information Technology Servicing Company, providing service to clients nationwide. We are built on technical and technological know-how. We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.
                </p>
            </div>
        </div>
    )
}

export default Footer1