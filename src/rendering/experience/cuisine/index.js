import React from 'react'
import CuisineHeroBanner from './herobanner'
import Dine from './dine experience'
import Partner from './partner'
import Test from './taste'
import Location from './dining location'

export default function Cuisine() {
  return (
    <div>
      <CuisineHeroBanner />
      <Dine />
      <Partner />
      <Test />
      <Location/>
    </div>
  )
}
