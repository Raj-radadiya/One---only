import React from 'react'
import './familyTime.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import whale from '../../../../assets/image/whale.webp';
import restarea from '../../../../assets/image/familyrestarea.webp';
export default function FamilyTime() {
  return (
    <div>
      <div className='container3'>
        <div className='familyTimeMain'>
          <div className='familyTimeSec'>
            <a>One&Only Resorts</a>
            <a><img src={grater} alt='grater' /></a>
            <a>Experiences</a>
            <a><img src={grater} alt='grater' /></a>
            <a className='family'>Family</a>
          </div>

          <div className='familyTimeDisc'>
            <div className='familyTimeHead'>
              <h2>TIME AS ONE</h2>
            </div>
            <div className='familyTimePara'>
              <p>Let us curate the ultimate family escape, where every member of your tribe is welcome to share sun-soaked adventures, treasured down-time, and laughter-filled moments around the dining table. This is your invitation to recharge and reconnect away from everyday demands. To watch your family flourish amid the wild beauty of our one-of-a-kind destinations. To simply be.</p>
            </div>
          </div>
          <div className='container5'>
            <div className='familyTimeCard'>
              <div className='familyTimeCardLeft'>
                <div className='whaleImg'>
                  <img src={whale} alt='img' />
                </div>
              </div>
              <div className='familyTimeCardRight'>
                <div className='restArea'>
                  <img src={restarea} alt='img' />
                </div>
                <div className='familyTimeCardDisc'>
                  <div className='familyTimeCardHead'>
                    <h4>Adventures await</h4>
                  </div>
                  <div className='familyTimeCardPara'>
                    <p>Marvel at the dolphins in Mauritius and the Maldives, or be entranced by whales in Cape Town and Mexico. Embrace Arabian charm as you drive deep into Dubai’s desert, and play to your heart’s content in One&Only’s collection of swimming pools and pristine beaches.</p>
                  </div>
                  <div className='familyTimeCardBtn'>
                    <a href='#'>explore</a>
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
