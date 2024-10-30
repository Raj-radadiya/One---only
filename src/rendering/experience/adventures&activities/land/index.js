import React from 'react'
import Slider from "react-slick";
import './land.scss'
import landFirst from '../../../../assets/image/landImg.webp';
import landSecond from '../../../../assets/image/landImg2.webp';
import landThird from '../../../../assets/image/landImg3.webp';
export default function Land() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0
  }
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    initialSlide: 0
  }
  return (
    <div>
      <div className='container5'>
        <div className='landMain'>
          <div className='landHead'>
            <h2>Adventures on land</h2>
          </div>
          <div className='landSlider'>
            <div className="slider-container">
              <Slider {...settings}>
                <div className='land'>
                  <div className='landImg'>
                    <img src={landFirst} alt='land' />
                  </div>
                  <div className='landText'>
                    <div className='landPara'>
                      <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                    </div>
                    <div className='landLink'>
                      <a href='#'>discover</a>
                    </div>
                  </div>
                </div>
                <div className='land'>
                  <div className='landImg'>
                    <img src={landSecond} alt='land' />
                  </div>
                  <div className='landText'>
                    <div className='landPara'>
                      <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                    </div>
                    <div className='landLink'>
                      <a href='#'>discover</a>
                    </div>
                  </div>
                </div>
                <div className='land'>
                  <div className='landImg'>
                    <img src={landThird} alt='land' />
                  </div>
                  <div className='landText'>
                    <div className='landPara'>
                      <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                    </div>
                    <div className='landLink'>
                      <a href='#'>discover</a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="slider-container2">
              <Slider {...settings2}>
                <div className='landBPara'>
                  <div className='land'>
                    <div className='landImg'>
                      <img src={landFirst} alt='land' />
                    </div>
                    <div className='landText'>
                      <div className='landPara'>
                        <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                      </div>
                      <div className='landLink'>
                        <a href='#'>discover</a>
                      </div>
                    </div>
                  </div>
                  <div className='landBottom'>
                    <div className='landPara'>
                      <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                    </div>
                    <div className='landLink'>
                      <a href='#'>discover</a>
                    </div>
                  </div>
                </div>

                <div className='landBPara'>
                  <div className='land'>
                    <div className='landImg'>
                      <img src={landSecond} alt='land' />
                    </div>
                    <div className='landText'>
                      <div className='landPara'>
                        <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                      </div>
                      <div className='landLink'>
                        <a href='#'>discover</a>
                      </div>
                    </div>
                  </div>
                  <div className='landBottom'>
                    <div className='landPara'>
                      <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                    </div>
                    <div className='landLink'>
                      <a href='#'>discover</a>
                    </div>
                  </div>
                </div>

                <div className='landBPara'>
                  <div className='land'>
                    <div className='landImg'>
                      <img src={landThird} alt='land' />
                    </div>
                    <div className='landText'>
                      <div className='landPara'>
                        <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                      </div>
                      <div className='landLink'>
                        <a href='#'>discover</a>
                      </div>
                    </div>
                  </div>
                  <div className='landBottom'>
                    <div className='landPara'>
                      <p>The adventure continues at One&Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                    </div>
                    <div className='landLink'>
                      <a href='#'>discover</a>
                    </div>
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
