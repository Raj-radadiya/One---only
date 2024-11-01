import React from 'react'
import './villa.scss'
import Slider from "react-slick";
import villa1 from '../../../../assets/image/room1.webp';
import villa2 from '../../../../assets/image/room2.webp';
import villa3 from '../../../../assets/image/room3.webp';
import villa4 from '../../../../assets/image/room4.webp';
import villa5 from '../../../../assets/image/room5.webp';
import villa6 from '../../../../assets/image/room6.webp';
import villa7 from '../../../../assets/image/room7.webp';
import villa8 from '../../../../assets/image/room8.webp';
import villa9 from '../../../../assets/image/room9.webp';
import villa10 from '../../../../assets/image/room10.webp';
import right from '../../../../assets/icon/icons8-right-20.png';
import left from '../../../../assets/icon/icons8-left-25.png';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='partnerLeftArrow'
            onClick={onClick}
        >
            <img src={left} alt='img' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='partnerRightArrow'
            onClick={onClick}
        >
            <img src={right} alt='img' />
        </div>
    );
}
export default function PrivateRoom() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    var settings3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <div>
            <div className='container3'>
                <div className='villaCardMain'>
                    <div className='villaHead'>
                        <h2>Private perfection</h2>
                    </div>
                    <div className='container2'>
                        <div className='villaSlider'>
                            <div className="slider-container">
                                <Slider {...settings}>

                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa1} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY REETHI RAH, MALDIVES</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa2} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only The Palm, Dubai</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa3} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY LE SAINT GÉRAN, MAURITIUS</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa4} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Desaru Coast, Malaysia</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa5} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Palmilla, Mexico</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa6} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Mandarina, Mexico</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa7} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY CAPE TOWN, SOUTH AFRICA</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa8} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Nyungwe House, Rwanda</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa9} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Gorilla's Nest, Rwanda</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa10} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Royal Mirage, Dubai</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...settings2}>

                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa1} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY REETHI RAH, MALDIVES</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa2} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only The Palm, Dubai</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa3} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY LE SAINT GÉRAN, MAURITIUS</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa4} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Desaru Coast, Malaysia</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa5} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Palmilla, Mexico</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa6} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Mandarina, Mexico</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa7} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY CAPE TOWN, SOUTH AFRICA</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa8} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Nyungwe House, Rwanda</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa9} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Gorilla's Nest, Rwanda</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa10} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Royal Mirage, Dubai</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container3">
                                <Slider {...settings3}>

                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa1} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY REETHI RAH, MALDIVES</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa2} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only The Palm, Dubai</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa3} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY LE SAINT GÉRAN, MAURITIUS</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa4} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Desaru Coast, Malaysia</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa5} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Palmilla, Mexico</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa6} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Mandarina, Mexico</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa7} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>ONE&ONLY CAPE TOWN, SOUTH AFRICA</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa8} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Nyungwe House, Rwanda</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa9} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Gorilla's Nest, Rwanda</h4>
                                            </div>
                                            <div className='villaLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='villaCard'>
                                        <div className='villaImg'>
                                            <img src={villa10} alt='img' />
                                        </div>
                                        <div className='villaDetails'>
                                            <div className='villaName'>
                                                <h4>One&Only Royal Mirage, Dubai</h4>
                                            </div>
                                            <div className='villaLink'>
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
        </div>
    )
}
