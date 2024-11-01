import React from 'react'
import './herobanner.scss'
import family from '../../../../assets/image/familyherobanner.webp';
export default function FamilyHerobanner() {
    return (
        <div>
            <div className='familyHerobannerMain'>
                <div className='familyHerobannerImg'>
                    <img src={family} alt='image' />
                </div>
                <div className='familyHerobannerText'>
                    <div className='familyBannerHead'>
                        <h1>FAMILY</h1>
                    </div>
                    <div className='familyBannerPara'>
                        <p>Enjoy cherished time together as you reconnect with those who matter most at One&Only resorts.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
