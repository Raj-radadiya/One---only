import React from 'react'
import './partner.scss'
import Slider from "react-slick";
import partner1 from '../../../../assets/image/partner1.webp';
import partner2 from '../../../../assets/image/partner2.webp';
import partner3 from '../../../../assets/image/partner3.webp';
import partner4 from '../../../../assets/image/partner4.webp';
import partner5 from '../../../../assets/image/partner5.webp';
import partner6 from '../../../../assets/image/partner6.webp';
import right from '../../../../assets/icon/icons8-right-20.png';
import left from '../../../../assets/icon/icons8-left-25.png';
import food from '../../../../assets/image/food.webp';
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
export default function Partner() {
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
                <div className='partnerMain'>
                    <div className='partnerHead'>
                        <h2>Our celebrity chef partnerships</h2>
                    </div>
                    <div className='container2'>
                        <div className='partnerSlider'>
                            <div className="slider-container">
                                <Slider {...settings}>

                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner1} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Nobu Matsuhisa</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Experience Japanese-Peruvian fusion cuisine, at Africa's only Michelin-starred Nobu, at One&Only Cape Town. Savour this invigorating medley of classics fused with local seafood for a truly exceptional experience, here at One&Only Cape Town.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner2} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Yannick Alléno</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Indulge in an evening of timeless French cuisine by Chef Yannick Allléno at One&Only The Palm. Prepare for a tantalising explosion of flavours at STAY and experience an exceptional eight-course dining with carefully selected wines paired by our in-house sommelier.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner3} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Enrique Olvera</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Relish in sensory dining at Carao by Enrique Olvera, at One&Only Mandarina. Defined as the future of Mexican cuisine, experience unrivalled flavours of smoked octopus and cured fish leave a lasting impression. His traditional palate will have you on an impressive voyage of culinary discovery</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner4} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Jean-Georges Vongerichten</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Savour Chef Jean-Gorges’ signature dishes of velvet sashimi slices, rich marbled meats and ocean fresh seafood dishes at One&Only Palmilla. Get only the best at our awe-inspiring signature restaurant, SEARED.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner5} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Andrew Walsh</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Explore a signature fusion blend of unique Asian cuisine and expertly prepared grills that showcase Chef Walsh’s distinct take on the age-old tradition of open-fire cooking. Inspired by global dining, sit back and enjoy the explosion of flavours at Ember Beach Club, One&Only Desaru Coast.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner6} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Mauro Colagreco</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Close your eyes and be transported to the French Riviera, with world-leading Chef Mauro Colagreco, who is also Chef Patron of the three-Michelin starred restaurant, Mirazur. Bask in the sensory experience of his innovative menus at One&Only Royal Mirage.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...settings2}>

                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner1} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Nobu Matsuhisa</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Experience Japanese-Peruvian fusion cuisine, at Africa's only Michelin-starred Nobu, at One&Only Cape Town. Savour this invigorating medley of classics fused with local seafood for a truly exceptional experience, here at One&Only Cape Town.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner2} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Yannick Alléno</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Indulge in an evening of timeless French cuisine by Chef Yannick Allléno at One&Only The Palm. Prepare for a tantalising explosion of flavours at STAY and experience an exceptional eight-course dining with carefully selected wines paired by our in-house sommelier.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner3} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Enrique Olvera</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Relish in sensory dining at Carao by Enrique Olvera, at One&Only Mandarina. Defined as the future of Mexican cuisine, experience unrivalled flavours of smoked octopus and cured fish leave a lasting impression. His traditional palate will have you on an impressive voyage of culinary discovery</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner4} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Jean-Georges Vongerichten</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Savour Chef Jean-Gorges’ signature dishes of velvet sashimi slices, rich marbled meats and ocean fresh seafood dishes at One&Only Palmilla. Get only the best at our awe-inspiring signature restaurant, SEARED.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner5} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Andrew Walsh</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Explore a signature fusion blend of unique Asian cuisine and expertly prepared grills that showcase Chef Walsh’s distinct take on the age-old tradition of open-fire cooking. Inspired by global dining, sit back and enjoy the explosion of flavours at Ember Beach Club, One&Only Desaru Coast.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner6} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Mauro Colagreco</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Close your eyes and be transported to the French Riviera, with world-leading Chef Mauro Colagreco, who is also Chef Patron of the three-Michelin starred restaurant, Mirazur. Bask in the sensory experience of his innovative menus at One&Only Royal Mirage.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container3">
                                <Slider {...settings3}>

                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner1} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Nobu Matsuhisa</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Experience Japanese-Peruvian fusion cuisine, at Africa's only Michelin-starred Nobu, at One&Only Cape Town. Savour this invigorating medley of classics fused with local seafood for a truly exceptional experience, here at One&Only Cape Town.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner2} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Yannick Alléno</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Indulge in an evening of timeless French cuisine by Chef Yannick Allléno at One&Only The Palm. Prepare for a tantalising explosion of flavours at STAY and experience an exceptional eight-course dining with carefully selected wines paired by our in-house sommelier.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner3} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Enrique Olvera</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Relish in sensory dining at Carao by Enrique Olvera, at One&Only Mandarina. Defined as the future of Mexican cuisine, experience unrivalled flavours of smoked octopus and cured fish leave a lasting impression. His traditional palate will have you on an impressive voyage of culinary discovery</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner4} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Jean-Georges Vongerichten</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Savour Chef Jean-Gorges’ signature dishes of velvet sashimi slices, rich marbled meats and ocean fresh seafood dishes at One&Only Palmilla. Get only the best at our awe-inspiring signature restaurant, SEARED.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner5} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Andrew Walsh</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Explore a signature fusion blend of unique Asian cuisine and expertly prepared grills that showcase Chef Walsh’s distinct take on the age-old tradition of open-fire cooking. Inspired by global dining, sit back and enjoy the explosion of flavours at Ember Beach Club, One&Only Desaru Coast.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partnerCard'>
                                        <div className='partnerImg'>
                                            <img src={partner6} alt='img' />
                                        </div>
                                        <div className='partnerDetails'>
                                            <div className='partnerName'>
                                                <h4>Mauro Colagreco</h4>
                                            </div>
                                            <div className='partnerExperience'>
                                                <p>Close your eyes and be transported to the French Riviera, with world-leading Chef Mauro Colagreco, who is also Chef Patron of the three-Michelin starred restaurant, Mirazur. Bask in the sensory experience of his innovative menus at One&Only Royal Mirage.</p>
                                            </div>
                                            <div className='partnerLink'>
                                                <a href='#'>explore</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container5'>
                    <div className='foodMain'>
                        <div className='foodDisc'>
                            <div className='foodText'>
                                <div className='foodHead'>
                                    <h2>Innovative epicurean experience</h2>
                                </div>
                                <div className='foodPara'>
                                    <p>Inspired by constant exploration of Mexico’s bountiful ingredients, Chef Olvera’s Carao at One&Only Mandarina is an extraordinary dining destination. Experience a twist of modern yet authentic Mexican cuisine where unique regional flavours are celebrated, all in a relaxed and elegant atmosphere amidst the coastal rainforest of Mexico’s Riviera Nayarit.</p>
                                </div>
                                <div className='foodBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                        <div className='foodImg'>
                            <img src={food} alt='img' />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
