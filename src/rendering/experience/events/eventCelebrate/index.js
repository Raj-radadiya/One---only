import React from 'react'
import './celebrate.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import monument from '../../../../assets/image/monument.webp';
import dineTable from '../../../../assets/image/idningTable.webp';
export default function Celebrate() {
  return (
    <div>
      <div className='container3'>
        <div className='celebrateMain'>
          <div className='celebrateNavSec'>
            <a>One&Only Resorts</a>
            <a><img src={grater} alt='grater' /></a>
            <a>Experiences</a>
            <a><img src={grater} alt='grater' /></a>
            <a className='celebrate'>Celebrations & Events</a>
          </div>

          <div className='celebrateMainDisc'>
            <div className='celebrateMainHead'>
              <h2>Celebrate with One&Only</h2>
            </div>
            <div className='celebrateMainPara'>
              <p>Let us craft an exceptional event of your wildest imaginings, from significant birthdays to romantic ceremonies and heartfelt family gatherings. Be inspired by our breathtaking settings across the globe to bring your dreams to life, guided by our expert planners who take care of every last detail. With flawless dining, palatial villas, intuitive service and majestic nature, One&Only promises the perfect backdrop for your next celebration.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='celebrateCard'>
        <div className='container5'>
          <div className='celebrateCard'>
            <div className='celebrateCardLeft'>
              <div className='celebrateCardHeading'>
                <h2>The art of ‘I do’</h2>
              </div>
              <div className='monumentImg'>
                <img src={monument} alt='img' />
              </div>
            </div>
            <div className='celebrateCardRight'>
              <div className='dinnerImg'>
                <img src={dineTable} alt='img' />
              </div>
              <div className='celebrateCardDisc'>
                <div className='celebrateCardPara'>
                  <p>We’re skilled in the art of planning a wedding – but at One&Only, no two weddings are ever the same. There’s no template, no cookie-cutter. We begin with a blank page of endless possibilities and help you write your One&Only story together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
