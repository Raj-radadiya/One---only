import React from 'react'
import './test.scss'
import Slider from "react-slick";
import sparrow from '../../../../assets/image/sparrow.webp';
import tasteImg from '../../../../assets/image/tasteImg.webp';
import dineFirst from '../../../../assets/image/dineone.webp';
import dineSecond from '../../../../assets/image/dinesecond.webp';
import dineThird from '../../../../assets/image/dinethird.webp';
export default function Test() {
    const grid = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const grid2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='taste'>
                <div className='tasteMain'>
                    <div className='testAttachnment'>
                        <img src={sparrow} alt='sparrow' />
                    </div>
                    <div className='tasteCardMain'>
                        <div className='tasteLeft'>
                            <img src={tasteImg} alt='img' />
                        </div>
                        <div className='tasteRight'>
                            <div className='tasteDisc'>
                                <div className='tasteCardHead'>
                                    <h2>Taste from the barrel</h2>
                                </div>
                                <div className='tasteCardPara'>
                                    <p>“Wine cannot just be about taste, colour and texture. It must also tell a story and the sommelier needs to be that storyteller.”</p>
                                    <p className='para'>- Luvo Ntezo, Head Sommelier at One&Only Cape Town</p>
                                </div>
                                <div className='tasteBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='container4'>
                    <div className='signDineMain'>
                        <div className='container5'>
                            <div className='dineDetails'>
                                <div className='dineHead'>
                                    <h2>Tapasake: One&Only Signature Dining</h2>
                                </div>
                                <div className='dinePara'>
                                    <p>Embodying relaxed Asian elegance and earthy ambience, Tapasake’s synthesis of contemporary Japanese cooking and rich Western flavours are served in a unique Tapas style. Discover our three Tapasake destinations, each uniquely crafted by different elements of modern embodiment of Japanese and Asian cuisine.</p>
                                </div>
                                <div className='dineBtn'>
                                    <button>discover me</button>
                                </div>
                            </div>
                        </div>
                        <div className='tasteSlider'>
                            <div className="slider-container">
                                <Slider {...grid}>
                                    <div className='tasteCard'>
                                        <div className='tasteImg'>
                                            <img src={dineFirst} alt='first' />
                                        </div>
                                        <div className='tasteSliderDisc'>
                                            <div className='tasteSliderHead'>
                                                <h4>Tapasake at One&Only Reethi Rah</h4>
                                            </div>
                                            <div className='tasteSliderPara'>
                                                <p>Savour the fragrant aromas and hand-pick your fresh seafood at the impressive granite sushi counter. Feel completely entranced with the outdoor teppanyaki experience as you watch the flaming grills spark along with the mesmerising sunset views.</p>
                                            </div>
                                            <div className='tasteSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tasteCard'>
                                        <div className='tasteImg'>
                                            <img src={dineSecond} alt='first' />
                                        </div>
                                        <div className='tasteSliderDisc'>
                                            <div className='tasteSliderHead'>
                                                <h4>Tapasake at One&Only Le Saint Géran</h4>
                                            </div>
                                            <div className='tasteSliderPara'>
                                                <p>Indulge in theatre-style Asian tapas at the sun-kissed ocean setting of Tapaske at One&Only Le Saint Géran. Savour your crisp cocktail and watch with wide eyes as our talented chefs add a modern Peruvian twist to thriving Japanese traditions.</p>
                                            </div>
                                            <div className='tasteSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tasteCard'>
                                        <div className='tasteImg'>
                                            <img src={dineThird} alt='first' />
                                        </div>
                                        <div className='tasteSliderDisc'>
                                            <div className='tasteSliderHead'>
                                                <h4>Tapasake Club at One&Only Portonovi</h4>
                                            </div>
                                            <div className='tasteSliderPara'>
                                                <p>Joining our vibrant Tapasake family is the new Tapasake Club at One&Only Portonovi. Framed by the Adriatic waters and bay views, this is set to be a one-of-a-kind destination dining in the region. Be mesmerised by the tantalising dishes, vibrant energy of the pool club and the live DJ sets, and eclectic poolside bites and cocktails.</p>
                                            </div>
                                            <div className='tasteSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...grid2}>
                                    <div className='tasteCard'>
                                        <div className='tasteImg'>
                                            <img src={dineFirst} alt='first' />
                                        </div>
                                        <div className='tasteSliderDisc'>
                                            <div className='tasteSliderHead'>
                                                <h4>Tapasake at One&Only Reethi Rah</h4>
                                            </div>
                                            <div className='tasteSliderPara'>
                                                <p>Savour the fragrant aromas and hand-pick your fresh seafood at the impressive granite sushi counter. Feel completely entranced with the outdoor teppanyaki experience as you watch the flaming grills spark along with the mesmerising sunset views.</p>
                                            </div>
                                            <div className='tasteSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tasteCard'>
                                        <div className='tasteImg'>
                                            <img src={dineSecond} alt='first' />
                                        </div>
                                        <div className='tasteSliderDisc'>
                                            <div className='tasteSliderHead'>
                                                <h4>Tapasake at One&Only Le Saint Géran</h4>
                                            </div>
                                            <div className='tasteSliderPara'>
                                                <p>Indulge in theatre-style Asian tapas at the sun-kissed ocean setting of Tapaske at One&Only Le Saint Géran. Savour your crisp cocktail and watch with wide eyes as our talented chefs add a modern Peruvian twist to thriving Japanese traditions.</p>
                                            </div>
                                            <div className='tasteSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tasteCard'>
                                        <div className='tasteImg'>
                                            <img src={dineThird} alt='first' />
                                        </div>
                                        <div className='tasteSliderDisc'>
                                            <div className='tasteSliderHead'>
                                                <h4>Tapasake Club at One&Only Portonovi</h4>
                                            </div>
                                            <div className='tasteSliderPara'>
                                                <p>Joining our vibrant Tapasake family is the new Tapasake Club at One&Only Portonovi. Framed by the Adriatic waters and bay views, this is set to be a one-of-a-kind destination dining in the region. Be mesmerised by the tantalising dishes, vibrant energy of the pool club and the live DJ sets, and eclectic poolside bites and cocktails.</p>
                                            </div>
                                            <div className='tasteSliderLink'>
                                                <a href='#'>Discover more</a>
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
