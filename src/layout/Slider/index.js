import React from "react";
import Slider from "react-slick";
import './slider.scss'
import bannerFirst from '../../assets/image/herobannerfirst.webp';
import bannerSecond from '../../assets/image/herobannersecond.webp';
import bannerThird from '../../assets/image/herobannerthird.webp';
export default function Slider1() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div>
            <div className='bannerMain'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='bannerFirst'>
                            <div className='bannerImg'>
                                <img src={bannerFirst} alt='banner' />
                            </div>
                            <div className='sliderText animate__animated animate__fadeInRight wow'>
                                <h1>One&Only Kéa Island</h1>
                                <p>Unlock the secrets of Kéa island with our exceptional new Greek resort. Resort now open.</p>
                                <button className='btn'>explore</button>
                            </div>
                        </div>
                        <div className='bannerFirst'>
                            <div className='bannerImg'>
                                <img src={bannerSecond} alt='banner' />
                            </div>
                            <div className='sliderText animate__animated animate__fadeInRight wow'>
                                <h1>One&Only One Za'abeel</h1>
                                <p>Welcome to our first urban resort, where exceptional dining, innovative wellness and extraordinary experiences converge in Dubai.</p>
                                <button className='btn'>explore</button>
                            </div>
                        </div>
                        <div className='bannerFirst'>
                            <div className='bannerImg'>
                                <img src={bannerThird} alt='banner' />
                            </div>
                            <div className='sliderText animate__animated animate__fadeInRight wow'>
                                <h1>Unlock the City</h1>
                                <p>Amna and Hamda Al Qubaisi open the doors to One&Only One Za’abeel, a glamorous city stay in Dubai.</p>
                                <button className='btn'>explore</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div >
    )
}
