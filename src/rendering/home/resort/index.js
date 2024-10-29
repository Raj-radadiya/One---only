import React from 'react'
import './resort.scss'
import resortFirst from '../../../assets/image/resortcardimg.webp';
import resortSecond from '../../../assets/image/resortcardimgsecond.webp';
import explore from '../../../assets/image/explore.webp';
export default function Resorts() {
    return (
        <div>
            <div className='container'>
                <div className='resortMain'>
                    <div className='resortCard'>
                        <div className='resortExploreImg'>
                            <img src={resortFirst} alt='image' />
                        </div>
                        <div className='resortText'>
                            <div className='resortHeading'>
                                <h4>our resorts</h4>
                            </div>
                            <div className='resortPara'>
                                <p>Found in the world’s most inspiring destinations, discover exceptional, one-off resorts that place you in the heart of each fascinating location.</p>
                            </div>
                            <div className='resortLink'>
                                <a href='#'>Discover Our Resorts</a>
                            </div>
                        </div>
                    </div>
                    <div className='resortCard'>
                        <div className='resortExploreImg'>
                            <img src={resortSecond} alt='image' />
                        </div>
                        <div className='resortText'>
                            <div className='resortHeading'>
                                <h4>Our Private Homes</h4>
                            </div>
                            <div className='resortPara'>
                                <p>One&Only Private Homes feature an exclusive collection of iconic villas in captivating coastal and urban locations, now available to purchase and stay</p>
                            </div>
                            <div className='resortLink'>
                                <a href='#'>Discover Our Private Homes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container3'>
                <div className='exploreMain'>
                    <div className='exploreImg'>
                        <img src={explore} alt='image' />
                    </div>
                    <div className='exploreText'>
                        <h4>Escape with One&Only</h4>
                        <p>Unlock the world of One&Only with our exclusive offers and experience even more of what you love. The choice is all yours.</p>
                        <button>explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
