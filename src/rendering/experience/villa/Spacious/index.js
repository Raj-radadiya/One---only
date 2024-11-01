import React from 'react'
import './spacious.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import Exclusively from '../../../../assets/image/ExclusivelyImg.webp';
export default function Spacious() {
    return (
        <div>
            <div className='container2'>
                <div className='SpaciousMain'>
                    <div className='SpaciousSec'>
                        <a>One&Only Resorts</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a>Experiences</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a className='dubai'>Villas and Suites</a>
                    </div>

                    <div className='SpaciousDisc'>
                        <div className='SpaciousHead'>
                            <h2>Spacious retreats</h2>
                        </div>
                        <div className='SpaciousPara'>
                            <p>Gaze across the uninterrupted horizon from your private water villa, suspended over the ocean. Discover the iconic city skylines surrounded by tranquil waterways. Enjoy your front-row seat to the wonders of nature, from a lodge nestled in the foothills of remote jungle, to exceptional suites and expansive villas. Discover a sanctuary you’ll never want to leave.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container5'>
                <div className='exclusivelyMain'>
                    <div className='exclusivelyDisc'>
                        <div className='exclusivelyText'>
                            <div className='exclusivelyHead'>
                                <h2>Exclusively yours</h2>
                            </div>
                            <div className='exclusivelyPara'>
                                <p>Nowhere else do the wonders of the planet’s most incredible locations fuse so intimately with the warm feeling of home. Spacious retreats that envelop you in seclusion and seamlessly blend outdoors with in, immersing you in the colours and textures of ‘here’. Offering the finest private amenities and unrivalled personal service. This is living at its very best.</p>
                            </div>
                        </div>
                    </div>
                    <div className='exclusivelyImg'>
                        <img src={Exclusively} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}
