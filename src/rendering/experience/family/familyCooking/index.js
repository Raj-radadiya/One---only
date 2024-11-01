import React from 'react'
import './familycooking.scss'
import familyCookingImg from '../../../../assets/image/familyCookingcardimg.webp';
import familyVillaImg from '../../../../assets/image/familyvilla.webp';
export default function FamilyCooking() {
    return (
        <div>
            <div className='container5'>
                <div className='familyCooking'>
                    <div className='familyCookingMain'>
                        <div className='familyCookingDisc'>
                            <div className='familyCookingText'>
                                <div className='familyCookingHead'>
                                    <h2>FOR THE LITTLE ONES</h2>
                                </div>
                                <div className='familyCookingPara'>
                                    <p>Watch the joy in little faces light up as we introduce the youngest members of your tribe to our KidsOnly club. Our inspiring programmes let junior explorers connect with nature, nurture their creative spirit, or simply relax and watch movies under the stars.</p>
                                </div>
                            </div>
                        </div>
                        <div className='familyCookingImg'>
                            <img src={familyCookingImg} alt='img' />
                        </div>
                    </div>
                </div>

                <div className='familyVilla'>
                    <div className='familyVillaMain'>
                        <div className='familyVillaImg'>
                            <img src={familyVillaImg} alt='img' />
                        </div>
                        <div className='familyVillaDisc'>
                            <div className='familyVillaText'>
                                <div className='familyVillaHead'>
                                    <h2>Space to share</h2>
                                </div>
                                <div className='familyVillaPara'>
                                    <p>Our unrivalled collection of villas and suites are designed with families and groups in mind. Soak up abundant space and seamless indoor-outdoor living, as you take the time to recharge and reconnect in your private hideaway.</p>
                                </div>
                                <div className='familyVillaBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
