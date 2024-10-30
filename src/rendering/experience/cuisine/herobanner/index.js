import React from 'react'
import './herobanner.scss'
import cuisine from '../../../../assets/image/cuisineBanner.webp';
export default function CuisineHeroBanner() {
    return (
        <div>
            <div className='cuisineMain'>
                <div className='cuidineImg'>
                    <img src={cuisine} alt='image' />
                </div>
                <div className='cuisineText'>
                    <div className='cuisineBannerHead'>
                        <h1>Cuisine</h1>
                    </div>
                    <div className='cuisineBannerPara'>
                        <p>A sensorial voyage of discovery awaits at every One&Only resort.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
