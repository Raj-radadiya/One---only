import React from 'react'
import './time.scss'
import time from '../../../../assets/image/time.webp';
export default function Time() {
    return (
        <div>
            <div className='timeMain'>
                <div className='container3'>
                    <div className='timeFlex'>
                        <div className='timeLeft'>
                            <div className='timeLocation'>
                                <img src={time} alt='time' />
                            </div>
                        </div>
                        <div className='timeRight'>
                            <div className='timeHead'>
                                <h2>Your Time, Uninterrupted</h2>
                            </div>
                            <div className='timeDetail'>
                                <p>Experience true warmth with One&Only’s iconic personalised host service. Allow your One&Only private host to take care of your every need, from our welcoming unpacking service to our signature nightly turn-down.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
