import React from 'react'
import './location.scss'
import location from '../../../../assets/image/dinelocation.webp';
import full from '../../../../assets/image/full.webp';
export default function Location() {
    return (
        <div>
            <div className='dineLocationMain'>
                <div className='container3'>
                    <div className='dineFlex'>
                        <div className='dineLeft'>
                            <div className='dineLocation'>
                                <img src={location} alt='location' />
                            </div>
                        </div>
                        <div className='dineRight'>
                            <div className='locationHead'>
                                <h2>AL FRESCO DINING</h2>
                            </div>
                            <div className='locationDetail'>
                                <p>Embark on a culinary voyage of discovery and dine beneath the sun and stars at One&Only’s al fresco dining destinations</p>
                            </div>
                            <div className='locationBtn'>
                                <button>discover</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fullImg'>
                    <img src={full}alt='img'/>
                </div>
            </div>
        </div>
    )
}
