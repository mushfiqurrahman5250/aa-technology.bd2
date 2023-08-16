import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import 'animate.css';

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://i.ibb.co/k2n3kK5/slide1.jpg',
            title: 'AA Technology Ltd. is an Information Technology Servicing Company',
            description: 'We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/h1MJmh3/black-Untitled-7.jpg',
            title: 'AA Technology Ltd. is an Information Technology Servicing Company',
            description: 'We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.',
            button: 'htttps://www.google.com'
        },
        {
            id: 3,
            image: 'https://i.ibb.co/sCvVnHR/slide3.webp',
            title: 'AA Technology Ltd. is an Information Technology Servicing Company',
            description: 'We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.',
            button: 'htttps://www.google.com'
        },
        {
            id: 4,
            image: 'https://i.ibb.co/k2n3kK5/slide1.jpg',
            title: 'AA Technology Ltd. is an Information Technology Servicing Company',
            description: 'We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.',
            button: 'htttps://www.google.com'
        },
        {
            id: 5,
            image: 'https://i.ibb.co/bNLYSjf/Pantry-right-wall-4.jpg',
            title: 'AA Technology Ltd. is an Information Technology Servicing Company',
            description: 'We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.',
            button: 'htttps://www.google.com'
        },
        {
            id: 6,
            image: 'https://i.ibb.co/t2QK3xF/4k.jpg',
            title: 'AA Technology Ltd. is an Information Technology Servicing Company',
            description: 'We enjoy discovering new possibilities in the field of Intelligence Solutions, IT services, as well as Manufacturing.',
            button: 'htttps://www.google.com'
        },
      
       
        
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider