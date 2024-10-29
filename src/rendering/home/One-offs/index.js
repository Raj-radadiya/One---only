import React from 'react'
import Slider from "react-slick";
import './one.scss'
import offImgfirst from '../../../assets/image/offImgfirst.webp';
import offImgSecond from '../../../assets/image/offImgsecond.webp';
import offImgThird from '../../../assets/image/offImgthird.webp';
import offImgForth from '../../../assets/image/offImgforth.webp';
import left from '../../../assets/icon/icons8-left-25.png';
import right from '../../../assets/icon/icons8-right-20.png';
import resortImage from '../../../assets/image/resortImg.webp';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='left_arrow'
            onClick={onClick}
        >
            <img src={left} alt='left' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='right_arrow'
            onClick={onClick}
        >
            <img src={right} alt='right' />
        </div>
    );
}
export default function OneOffs() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div>
            <div className='space'></div>
            <div className='oneOffMain'>
                <div className='offDetails'>
                    <div className='oneHeading'>
                        <h2>Exceptional One-offs</h2>
                    </div>
                    <div className='onePara'>
                        <p>From uncharted wilderness to hidden beaches, alpine hideaways and captivating city stays, let us set the stage for your next exceptional escape. Discover a world of one-offs with One&Only Resorts and Private Homes, found in the most inspiring locations on Earth.
                            - Celebrating Exceptional One-Offs -</p>
                    </div>
                    <div className='oneButton'>
                        <button>our resorts</button>
                    </div>
                </div>

                <div className='offSliderMain'>
                    <div className='container2'>
                        <div className="slider-container">
                            <Slider {...settings}>

                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgfirst} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <div className='details'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgSecond} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <div className='details'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>A land of rugged natural beauty and cultural rituals, Kéa Island feels like a closely guarded secret. Let us reveal the wonders of this fabled island as locals share untold stories and exceptional experiences of Kéa.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgThird} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <h4>SECRETS OF AESTHESIS</h4>
                                        <p>On the doorstep of Dubai’s financial, retail and culinary hubs, One&Only One Za’abeel is the place to be for foodies, business travellers, fashionistas, families and wellness seekers.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgForth} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <div className='details'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>One&Only Aesthesis celebrated its Grand Opening over three glittering days, as A-list celebrities and global tastemakers including Kylie Minogue, Joe Jonas, Kim Cattrall, Olivier Rousteing and Luke Evans ushered in a new golden era on the Athenian Riviera.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="slider-container2">
                            <Slider {...settings2}>

                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgfirst} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <div className='details'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgSecond} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <div className='details'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>A land of rugged natural beauty and cultural rituals, Kéa Island feels like a closely guarded secret. Let us reveal the wonders of this fabled island as locals share untold stories and exceptional experiences of Kéa.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgThird} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <h4>SECRETS OF AESTHESIS</h4>
                                        <p>On the doorstep of Dubai’s financial, retail and culinary hubs, One&Only One Za’abeel is the place to be for foodies, business travellers, fashionistas, families and wellness seekers.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='offSlider'>
                                    <div className='offSliderImage'>
                                        <img src={offImgForth} alt='img' />
                                    </div>
                                    <div className='offCardDetails'>
                                        <div className='details'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>One&Only Aesthesis celebrated its Grand Opening over three glittering days, as A-list celebrities and global tastemakers including Kylie Minogue, Joe Jonas, Kim Cattrall, Olivier Rousteing and Luke Evans ushered in a new golden era on the Athenian Riviera.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='space'></div>
            </div>
            <div className='container3'>
                <div className='resortImg'>
                    <img src={resortImage} alt='image' />
                </div>
            </div>
        </div>
    )
}
