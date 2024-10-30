import React from 'react'
import Slider from "react-slick";
import './sea.scss'
import seaAttachnmentfirst from '../../../../assets/image/seaAttachnmentfirst.webp';
import seaFirst from '../../../../assets/image/seacardfirst.webp';
import seaSecond from '../../../../assets/image/seacardsecond.webp';
import seaThird from '../../../../assets/image/seacardthird.webp';
import adriaticImg from '../../../../assets/image/adriaticImg.webp';
export default function Sea() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <div>

            {/* <div className='seaMain'>
                <div className='seaAttachnment'>
                    <img src={seaAttachnmentfirst} alt='img' />
                </div>
                <div className='seaCard'>
                    <div className='seaCardMain'>
                        <div className='seaLeft'>
                            <div className='seaCardText'>
                                <div className='cardHead'>
                                    <h2>Adventures by the sea</h2>
                                </div>
                                <div className='cardPara'>
                                    <p>Witness nature’s most incredible displays with the wind in your hair and the sun kissing your skin. From scenic seas to the open ocean, embrace life on the crystal waters with personalised private charters, whale watching, thrilling watersports and ultimate relaxation with our range of one-of-a-kind moments, available on the azure seas.</p>
                                </div>
                            </div>
                        </div>
                        <div className='seaRight'>
                            <div className='seaSlider'>
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        <div className='seaSliderCard'>
                                            <div className='seaSliderImg'>
                                                <img src={seaFirst} alt='img' />
                                            </div>
                                            <div className='seaSliderDisc'>
                                                <div className='seaSliderHead'>
                                                    <h4>The beauty of Baja</h4>
                                                </div>
                                                <div className='seaSliderPara'>
                                                    <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                                </div>
                                                <div className='seaLink'>
                                                    <a href='#'>explore</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='seaSliderCard'>
                                            <div className='seaSliderImg'>
                                                <img src={seaFirst} alt='img' />
                                            </div>
                                            <div className='seaSliderDisc'>
                                                <div className='seaSliderHead'>
                                                    <h4>The beauty of Baja</h4>
                                                </div>
                                                <div className='seaSliderPara'>
                                                    <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                                </div>
                                                <div className='seaLink'>
                                                    <a href='#'>explore</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='seaSliderCard'>
                                            <div className='seaSliderImg'>
                                                <img src={seaFirst} alt='img' />
                                            </div>
                                            <div className='seaSliderDisc'>
                                                <div className='seaSliderHead'>
                                                    <h4>The beauty of Baja</h4>
                                                </div>
                                                <div className='seaSliderPara'>
                                                    <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                                </div>
                                                <div className='seaLink'>
                                                    <a href='#'>explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className='seaMain'>
                <div className='seaAttachnment'>
                    <img src={seaAttachnmentfirst} alt='sea' />
                </div>
                <div className='seaCard'>
                    <div className='seaCardMain'>
                        <div className='seaLeft'>
                            <div className='seaDisc'>
                                <div className='seaCardHead'>
                                    <h2>Adventures by the sea</h2>
                                </div>
                                <div className='seaCardPara'>
                                    <p>Witness nature’s most incredible displays with the wind in your hair and the sun kissing your skin. From scenic seas to the open ocean, embrace life on the crystal waters with personalised private charters, whale watching, thrilling watersports and ultimate relaxation with our range of one-of-a-kind moments, available on the azure seas.</p>
                                </div>
                            </div>
                        </div>
                        <div className='seaRight'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='seaSlider'>
                                        <div className='seaCardImg'>
                                            <img src={seaFirst} alt='sea' />
                                        </div>
                                        <div className='seaCardDisc'>
                                            <div className='seaCardHead'>
                                                <h4>The beauty of Baja</h4>
                                            </div>
                                            <div className='seaCardPara'>
                                                <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                            </div>
                                            <div className='seaCardLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='seaSlider'>
                                        <div className='seaCardImg'>
                                            <img src={seaSecond} alt='sea' />
                                        </div>
                                        <div className='seaCardDisc'>
                                            <div className='seaCardHead'>
                                                <h4>The beauty of Baja</h4>
                                            </div>
                                            <div className='seaCardPara'>
                                                <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                            </div>
                                            <div className='seaCardLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='seaSlider'>
                                        <div className='seaCardImg'>
                                            <img src={seaThird} alt='sea' />
                                        </div>
                                        <div className='seaCardDisc'>
                                            <div className='seaCardHead'>
                                                <h4>The beauty of Baja</h4>
                                            </div>
                                            <div className='seaCardPara'>
                                                <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                            </div>
                                            <div className='seaCardLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...settings2}>
                                    <div className='seaSlider'>
                                        <div className='seaCardImg'>
                                            <img src={seaFirst} alt='sea' />
                                        </div>
                                        <div className='seaCardDisc'>
                                            <div className='seaCardHead'>
                                                <h4>The beauty of Baja</h4>
                                            </div>
                                            <div className='seaCardPara'>
                                                <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                            </div>
                                            <div className='seaCardLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='seaSlider'>
                                        <div className='seaCardImg'>
                                            <img src={seaSecond} alt='sea' />
                                        </div>
                                        <div className='seaCardDisc'>
                                            <div className='seaCardHead'>
                                                <h4>The beauty of Baja</h4>
                                            </div>
                                            <div className='seaCardPara'>
                                                <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                            </div>
                                            <div className='seaCardLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='seaSlider'>
                                        <div className='seaCardImg'>
                                            <img src={seaThird} alt='sea' />
                                        </div>
                                        <div className='seaCardDisc'>
                                            <div className='seaCardHead'>
                                                <h4>The beauty of Baja</h4>
                                            </div>
                                            <div className='seaCardPara'>
                                                <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&Only Palmilla.</p>
                                            </div>
                                            <div className='seaCardLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container5'>
                <div className='adriaticMain'>
                    <div className='adriaticDisc'>
                        <div className='adriaticText'>
                            <div className='adriaticHead'>
                                <h2>Discover the Adriatic</h2>
                            </div>
                            <div className='adriaticPara'>
                                <p>Unearth the jewel of the Adriatic Sea and unwind in elegance. Explore the adventures of Montenegro's vibrant culture and restorative waters, lined by quaint idyllic towns. From fast-paced tennis to restorative wellness and adventures on land and sea, free your spirit at our nautical playground.</p>
                            </div>
                            <div className='adriaticBtn'>
                                <button>explore</button>
                            </div>
                        </div>
                    </div>
                    <div className='adriaticImg'>
                        <img src={adriaticImg} alt='img' />
                    </div>
                </div>
            </div>
        </div >
    )
}
