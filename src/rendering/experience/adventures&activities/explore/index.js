import React from 'react'
import './explore.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import play from '../../../../assets/image/playImg.webp';
import play2 from '../../../../assets/image/playImg2.webp';
export default function Explore() {
    return (
        <div>
            <div className='container3'>
                <div className='exploreMain'>
                    <div className='exploreSec'>
                        <a>One&Only Resorts</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a>Experiences</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a className='dubai'>Activities</a>
                    </div>

                    <div className='exploreDisc'>
                        <div className='exploreHead'>
                            <h2>Explore, discover, play</h2>
                        </div>
                        <div className='explorePara'>
                            <p>Explore Dubai’s exceptional One&Only resorts at One&Only Royal Mirage, One&Only The Palm and the upcoming One&Only One Za’abeel. Discover vistas framed by golden desert dunes and private coastlines amid the vibrance of Dubai, deeply rooted in Arabian culture.</p>
                        </div>
                    </div>
                    <div className='container5'>
                        <div className='exploreCard'>
                            <div className='exploreLeft'>
                                <div className='playHeading'>
                                    <h2>The magic of the Pacific</h2>
                                </div>
                                <div className='playImg'>
                                    <img src={play} alt='img' />
                                </div>
                            </div>
                            <div className='exploreRight'>
                                <div className='playImg2'>
                                    <img src={play2} alt='img' />
                                </div>
                                <div className='cardDisc'>
                                    <div className='exploreCardHead'>
                                        <h4>...And the coastal rainforest</h4>
                                    </div>
                                    <div className='exploreCardPara'>
                                        <p>Experience illuminating excursions and hands-on activities at One&Only Mandarina. Follow the striking rainforest path and step into a different world of white pristine sands. Connect with the world-class hive of Equestrian activity, the sun-dressed intrepid trails and the sensational ancient secrets of Mexico.</p>
                                    </div>
                                    <div className='exploreBtn'>
                                        <button>explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
