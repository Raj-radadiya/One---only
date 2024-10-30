import React from 'react'
import './dine.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import lava from '../../../../assets/image/lava.webp';
import table from '../../../../assets/image/table.webp';
export default function Dine() {
    return (
        <div>
            <div className='container3'>
                <div className='dineMain'>
                    <div className='dineSec'>
                        <a>One&Only Resorts</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a>Experiences</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a className='dubai'>cuisine</a>
                    </div>

                    <div className='dineDisc'>
                        <div className='dineHead'>
                            <h2>Sensory dining experiences</h2>
                        </div>
                        <div className='dinePara'>
                            <p>At One&Only, every table is a work of art, embodying the beauty of each resort’s location. Our thoughtful culinary experiences and celebrity chef partnerships are captivating, from fine dining and candlelit dinners, to feet-in-the-sand experiences with your loved ones. Explore our array of impressive globally acclaimed chefs at our destination resorts that include Nobu Matsuhisa at One&Only Cape Town, Yannick Alléno at One&Only The Palm, Enrique Olvera at One&Only Mandarina and many more.</p>
                        </div>
                    </div>
                    <div className='container5'>
                        <div className='dineCard'>
                            <div className='dineLeft'>
                                <div className='dineTable'>
                                    <img src={table} alt='img' />
                                </div>
                            </div>
                            <div className='dineRight'>
                                <div className='dineImg2'>
                                    <img src={lava} alt='img' />
                                </div>
                                <div className='dineCardDisc'>
                                    <div className='dineCardHead'>
                                        <h4>The flavours of 'Here'</h4>
                                    </div>
                                    <div className='dineCardPara'>
                                        <p>Not only do our restaurants tell a story of each vibrant culture, from exotic recipes to the finest local ingredients, they are elevated to world-class standards with critically-acclaimed celebrity chefs, innovative menus, and ultra-chic settings. With open kitchens, dynamic displays, and spectacular views, our restaurants are like theatres, amazing every sense.</p>
                                    </div>
                                    <div className='dineExploreBtn'>
                                        <button>explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
