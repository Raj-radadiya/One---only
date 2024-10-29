import React from 'react'
import './events.scss'
import eventFirst from '../../../assets/image/eventfirst.webp';
import eventSecond from '../../../assets/image/eventsecond.webp';
export default function Events() {
    return (
        <div>
            <div className='container'>
                <div className='event'>
                    <div className='eventDisc'>
                        <div className='eventHeading'>
                            <h2>Dubai Events Calendar</h2>
                        </div>
                        <div className='eventPara'>
                            <p>Don’t miss the latest happenings in Dubai. Explore all the city has to offer, from concerts to festivals and sports events to exhibitions.</p>
                        </div>
                    </div>
                    <div className='eventMain'>
                        <div className='eventCard'>
                            <div className='eventExploreImg'>
                                <img src={eventFirst} alt='image' />
                            </div>
                            <div className='eventText'>
                                <div className='eventHeading'>
                                    <h4>Dubai International Boat Show</h4>
                                </div>
                                <div className='eventPara'>
                                    <p>Experience the world’s most opulent super yachts and sailboats combined with the latest marine technology at the Dubai International Boat Show. The 2024 edition will take place at the Dubai Harbour, poised to be the biggest marina in the region and steps away from One&Only Royal Mirage and One&Only The Palm.</p>
                                </div>
                                <div className='eventDate'>
                                    <p>March 2024</p>
                                    <p>Dubai Harbour</p>
                                </div>
                                <div className='eventLink'>
                                    <a href='#'>Discover</a>
                                </div>
                            </div>
                        </div>
                        <div className='eventCard'>
                            <div className='eventExploreImg'>
                                <img src={eventSecond} alt='image' />
                            </div>
                            <div className='eventText'>
                                <div className='eventHeading'>
                                    <h4>Art Dubai</h4>
                                </div>
                                <div className='eventPara'>
                                    <p>Celebrate art and creativity in the Middle East. A mix of cultures and innovations awaits you at Art Dubai, from intimate talks to large-scale public art exhibitions across the city.</p>
                                </div>
                                <div className='eventDate'>
                                    <p>1 – 3 March 2024</p>
                                    <p>Madinat Jumeirah</p>
                                </div>
                                <div className='eventLink'>
                                    <a href='#'>Discover</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
