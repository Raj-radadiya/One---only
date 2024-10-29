import React from 'react'
import './activities.scss'
import activities from '../../../../assets/image/activities.webp';
export default function ActivitiesHerobanner() {
    return (
        <div>
            <div className='activitiesMain'>
                <div className='activitiesImg'>
                    <img src={activities} alt='image' />
                </div>
                <div className='activitiesText'>
                    <div className='bannerHead'>
                        <h1>Adventures & Activities</h1>
                    </div>
                    <div className='bannerPara'>
                        <p>Discover our untouched destinations, exceptional adventures and curated experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
