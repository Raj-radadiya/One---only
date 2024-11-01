import React from 'react'
import './villa.scss'
import Slider from "react-slick";
import villaImgfirst from '../../../../assets/image/roomlocation1.webp';
import villaImgSecond from '../../../../assets/image/roomlocation2.webp';
import villaImgThird from '../../../../assets/image/roomlocation3.webp';
import villaImgForth from '../../../../assets/image/roomlocation4.webp';
import villaImgFifth from '../../../../assets/image/roomlocation5.webp'
import left from '../../../../assets/icon/icons8-left-25.png';
import right from '../../../../assets/icon/icons8-right-24.png';
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
export default function VillaLocation() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div>
            <div className='villaMain'>
                <div className='villaLocation'>
                    <h2>Villa One: Our most exclusive address</h2>
                </div>
                <div className='villaSliderMain'>
                    <div className='container2'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgfirst} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgSecond} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgThird} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgForth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgFifth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="slider-container2">
                            <Slider {...settings2}>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgfirst} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgSecond} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgThird} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgForth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={villaImgFifth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaDetails'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
