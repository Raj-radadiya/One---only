import React from 'react'
import './herobanner.scss'
import event from '../../../../assets/image/eventHerobanner.webp';

export default function EventHeroBanner() {
  return (
    <div>
        <div className='eventHerobannerMain'>
                <div className='eventHerobannerImg'>
                    <img src={event} alt='image' />
                </div>
                <div className='eventHerobannerText'>
                    <div className='eventBannerHead'>
                        <h1>Celebrations & Events</h1>
                    </div>
                    <div className='eventBannerPara'>
                        <p>Mark life’s milestones in spectacular fashion, as One&Only brings your one-of-a-kind wedding, birthday or unforgettable event to life.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
