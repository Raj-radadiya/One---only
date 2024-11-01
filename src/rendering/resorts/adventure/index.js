import React from 'react'
import Slider from "react-slick";
import './advanture.scss'
import grater from '../../../assets/icon/icons8-greater-than-10.png';
import advantureFirst from '../../../assets/image/advantureFirst.webp';
import advantureSecond from '../../../assets/image/advantureSecond.webp';
import advantureThird from '../../../assets/image/advantureThird.webp';
import advantureSliderFirst from '../../../assets/image/advanturesliderfirst.webp';
import advantureSliderSecond from '../../../assets/image/advantureslidersecond.webp';
import advantureSliderThird from '../../../assets/image/advanturesliderthird.webp';
import left from '../../../assets/icon/icons8-left-25.png';
import right from '../../../assets/icon/icons8-right-20.png';

function AdventureNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div  
      className='AdventureLeftArrow'
      onClick={onClick}
    >
      <img src={left} alt='left' />
    </div>
  );
}

function AdventurePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='AdventureRightArrow'
      onClick={onClick}
    >
      <img src={right} alt='right' />
    </div>
  );
}

export default function Adventure() {
  const grid = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const grid2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1
  };
  const centermode = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.66,
    speed: 500,
    nextArrow: <AdventureNextArrow />,
    prevArrow: <AdventurePrevArrow />
  };
  return (
    <div>
      <div className='advanture'>
        <div className='container4'>
          <div className='adventureMain'>
            <div className='advantureSec'>
              <a>One&Only Resorts</a>
              <a><img src={grater} alt='grater' /></a>
              <a>Destinations</a>
              <a><img src={grater} alt='grater' /></a>
              <a className='dubai'>dubai</a>
            </div>

            <div className='advantureM'>
              <div className='advantureDisc'>
                <div className='advantureHead'>
                  <h2>An Arabian adventure</h2>
                </div>
                <div className='advanturePara'>
                  <p>Explore Dubai’s exceptional One&Only resorts at One&Only Royal Mirage, One&Only The Palm and the upcoming One&Only One Za’abeel. Discover vistas framed by golden desert dunes and private coastlines amid the vibrance of Dubai, deeply rooted in Arabian culture.</p>
                </div>
              </div>

              <div className='acard'>
                <div className="slider-container">
                  <Slider {...grid}>
                    <div className='advantureCard'>
                      <div className='acardImg'>
                        <img src={advantureFirst} alt='first' />
                      </div>
                      <div className='acardDisc'>
                        <div className='acrdHead'>
                          <h4>One&Only Royal Mirage</h4>
                        </div>
                        <div className='acardPara'>
                          <p>In the cosmopolitan heart of Dubai, One&Only Royal Mirage evokes timeless Arabian splendour and elevated energy. A true resort, this urban shoreside oasis is spread across three distinct spaces, with a pristine kilometre-long private beach and curated dining and adventure inspired by the magic of Arabia.</p>
                        </div>
                        <div className='acardLink'>
                          <a href='#'>Discover</a>
                        </div>
                      </div>
                    </div>
                    <div className='advantureCard'>
                      <div className='acardImg'>
                        <img src={advantureSecond} alt='first' />
                      </div>
                      <div className='acardDisc'>
                        <div className='acrdHead'>
                          <h4>One&Only The Palm</h4>
                        </div>
                        <div className='acardPara'>
                          <p>One&Only The Palm is situated on Dubai’s exclusive ‘riviera’, where coastal tranquillity meets the energy of the city’s urban skyline. Refined and assured, this boutique beach resort is infused with endless romanticism, elegance and creativity. Discover a space for every mood, from Chef Yannick Alléno’s Michelin-starred cuisine to exceptional wellness at Guerlain Spa.</p>
                        </div>
                        <div className='acardLink'>
                          <a href='#'>Discover</a>
                        </div>
                      </div>
                    </div>
                    <div className='advantureCard'>
                      <div className='acardImg'>
                        <img src={advantureThird} alt='first' />
                      </div>
                      <div className='acardDisc'>
                        <div className='acrdHead'>
                          <h4>One&Only One Za'abeel</h4>
                        </div>
                        <div className='acardPara'>
                          <p>Imagine a place that’s the centre of everything. Of culture, of cuisine, of entertainment, of business. Where the fascinating gravitate by day, and circulate by night, and where everything the city offers can be curated, just for you. Welcome to One&Only One Za’abeel, the world’s first ultra-luxury vertical urban resort in the soulful heart of Dubai.</p>
                        </div>
                        <div className='acardLink'>
                          <a href='#'>Discover</a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="slider-container2">
                  <Slider {...grid2}>
                    <div className='advantureCard'>
                      <div className='acardImg'>
                        <img src={advantureFirst} alt='first' />
                      </div>
                      <div className='acardDisc'>
                        <div className='acrdHead'>
                          <h4>One&Only Royal Mirage</h4>
                        </div>
                        <div className='acardPara'>
                          <p>In the cosmopolitan heart of Dubai, One&Only Royal Mirage evokes timeless Arabian splendour and elevated energy. A true resort, this urban shoreside oasis is spread across three distinct spaces, with a pristine kilometre-long private beach and curated dining and adventure inspired by the magic of Arabia.</p>
                        </div>
                        <div className='acardLink'>
                          <a href='#'>Discover</a>
                        </div>
                      </div>
                    </div>
                    <div className='advantureCard'>
                      <div className='acardImg'>
                        <img src={advantureSecond} alt='first' />
                      </div>
                      <div className='acardDisc'>
                        <div className='acrdHead'>
                          <h4>One&Only The Palm</h4>
                        </div>
                        <div className='acardPara'>
                          <p>One&Only The Palm is situated on Dubai’s exclusive ‘riviera’, where coastal tranquillity meets the energy of the city’s urban skyline. Refined and assured, this boutique beach resort is infused with endless romanticism, elegance and creativity. Discover a space for every mood, from Chef Yannick Alléno’s Michelin-starred cuisine to exceptional wellness at Guerlain Spa.</p>
                        </div>
                        <div className='acardLink'>
                          <a href='#'>Discover</a>
                        </div>
                      </div>
                    </div>
                    <div className='advantureCard'>
                      <div className='acardImg'>
                        <img src={advantureThird} alt='first' />
                      </div>
                      <div className='acardDisc'>
                        <div className='acrdHead'>
                          <h4>One&Only One Za'abeel</h4>
                        </div>
                        <div className='acardPara'>
                          <p>Imagine a place that’s the centre of everything. Of culture, of cuisine, of entertainment, of business. Where the fascinating gravitate by day, and circulate by night, and where everything the city offers can be curated, just for you. Welcome to One&Only One Za’abeel, the world’s first ultra-luxury vertical urban resort in the soulful heart of Dubai.</p>
                        </div>
                        <div className='acardLink'>
                          <a href='#'>Discover</a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='centerMode'>
          <div className="slider-container">
            <Slider {...centermode}>
              <div className='advantureimg'>
                <img src={advantureSliderFirst} alt='first' />
              </div>
              <div className='advantureimg'>
                <img src={advantureSliderSecond} alt='first' />
              </div>
              <div className='advantureimg'>
                <img src={advantureSliderThird} alt='first' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
