import React from 'react'
import './herobanner.scss'
import villa from '../../../../assets/image/villaherobanner.webp';
export default function VillaHeroBanner() {
    return (
        <div>
            <div className='villaHeroMain'>
                <div className='villaImg'>
                    <img src={villa} alt='image' />
                </div>
                <div className='villaText'>
                    <div className='villaBannerHead'>
                        <h1>Villas & Suites</h1>
                    </div>
                    <div className='villaBannerPara'>
                        <p>One&Only villas and suites offer unparalleled space and privacy. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
