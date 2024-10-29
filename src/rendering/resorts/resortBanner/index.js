import React from 'react'
import './banner.scss'
import heroBanner from '../../../assets/image/resortHeroBanner.webp';
export default function ResortHeroBanner() {
    return (
        <div>
            <div className='resortHeroBanner'>
                <div className='resortBannerImg'>
                    <img src={heroBanner} alt='image' />
                </div>
                <div className='resortherobannertext'>
                    <div className='resortHeading'>
                        <h1>Welcome to Dubai</h1>
                    </div>
                    <div className='resortBannerPara'>
                        <p>With its natural landscapes and majestic city skyline, Dubai has become one of the world's most cosmopolitan cities and an iconic destination to visit and explore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
