import React from 'react'
import './tradition.scss'
import traditionAttachnment from '../../../../assets/image/traditionAttachnment.webp';
import teaditionImg from '../../../../assets/image/teaditionImg.webp';
import gorila from '../../../../assets/image/gorila.webp';
import nature from '../../../../assets/image/nature.webp';
import arabian from '../../../../assets/image/arabian.webp';
export default function Tradition() {
    return (
        <div>
            <div className='traditionMain'>
                <div className='traditionAttachnment'>
                    <img src={traditionAttachnment} alt='sea' />
                </div>
                <div className='traditionCardMain'>
                    <div className='traditionLeft'>
                        <img src={teaditionImg} alt='img' />
                    </div>
                    <div className='traditionRight'>
                        <div className='traditionDisc'>
                            <div className='traditionCardHead'>
                                <h2>Alluring Asian traditions</h2>
                            </div>
                            <div className='traditionCardPara'>
                                <p>Feel at one with the authentic spirit of Malaysia and explore the evolution of the arts through the ‘Warriors Journey’ at the UNESCO-listed Silat Melayu. Experience practice rooted in local folklore and preserved only through oral traditions at One&Only Desaru Coast.</p>
                            </div>
                            <div className='traditionBtn'>
                                <button>explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container5'>
                <div className='wildCard'>
                    <div className='wildLeft'>
                        <div className='playImg2'>
                            <img src={nature} alt='img' />
                        </div>
                    </div>
                    <div className='wildRight'>
                        <div className='wildImg1'>
                            <img src={gorila} alt='img' />
                        </div>
                        <div className='cardDisc'>
                            <div className='wildCardHead'>
                                <h4>Exceptional Encounters</h4>
                            </div>
                            <div className='wildCardPara'>
                                <p>Follow misty trails through the flourishing canopy, feel the excitement build as you explore the natural habitat of these remarkable endangered mountain gorillas at One&Only Gorilla’s Nest, Rwanda. Track their movements and embark on this transformative journey of self-discovery in this once-in-a-lifetime experience.</p>
                            </div>
                            <div className='wildBtn'>
                                <button>explore</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='arabianMain'>
                <div className='arabianHead'>
                    <h2>An Arabian adventure</h2>
                </div>
                <div className='arabianImg'>
                    <img src={arabian} alt='img' />
                </div>
                <div className='arabianText'>
                    <div className='arabianPara'>
                        <p>In Dubai, our two incredible resorts, One&Only The Palm and One&Only Royal Mirage are located on the city’s alluring beaches, just a short drive from Dubai’s desert dunes, where the ancient customs of the Middle East’s Bedouin tribes live on. Lose yourself in the charm of this great cosmopolitan city.</p>
                    </div>
                    <div className='arabianBtn'>
                        <button>explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}