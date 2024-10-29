import React from 'react'
import './footer.scss'
import footerLogo from '../../assets/logo/whiteLogo.webp';
import linkdin from '../../assets/icon/linkedin.png';
import x from '../../assets/icon/twitter.png';
import fb from '../../assets/icon/facebook.png';
import insta from '../../assets/icon/instagram.png';
import youtube from '../../assets/icon/youtube.png';
export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='container3'>
          <div className='footerMain'>
            <div className='footerLogo'>
              <div className='FooterImg'>
                <img src={footerLogo} alt='photo' />
              </div>
            </div>
            <div className='linkFooter'>
              <div className='link1'>
                <span>about us</span>
                <ul>
                  <li>
                    <a href='#'>About One&Only</a>
                  </li>
                  <li>
                    <a href='#'>Our Resorts</a>
                  </li>
                  <li>
                    <a href='#'>Private Homes</a>
                  </li>
                </ul>
              </div>
              <div className='link1'>
                <span>News and Awards</span>
                <ul>
                  <li>
                    <a href='#'>Media Centre</a>
                  </li>
                  <li>
                    <a href='#'>Awards</a>
                  </li>
                  <li>
                    <a href='#'>Newsletter Signup</a>
                  </li>
                </ul>
              </div>
              <div className='link1'>
                <span>Terms & Conditions</span>
                <ul>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Website Terms</a>
                  </li>
                  <li>
                    <a href='#'>Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className='link1'>
                <span>Contact</span>
                <ul>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>

                </ul>
              </div>
              <div className='link1'>
                <span>Kerzner</span>
                <ul>
                  <li>
                    <a href='#'>Atlantis</a>
                  </li>
                  <li>
                    <a href='#'>Siro</a>
                  </li>
                  <li>
                    <a href='#'>Rare Finds</a>
                  </li>
                  <li>
                    <a href='#'>Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='socialLink'>
            <div className='socialMedia'>
              <img src={linkdin} alt='linkdin'/>
              <img src={x} alt='x'/>
              <img src={fb} alt='fb'/>
              <img src={insta} alt='insta'/>
              <img src={youtube} alt='youtube'/>
            </div>
            <div className='writes'>
              <p>2024 © Kerzner International Limited. All Rights Reserved.</p>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}
