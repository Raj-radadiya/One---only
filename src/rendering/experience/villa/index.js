import React from 'react'
import VillaHeroBanner from './herobanner'
import Spacious from './Spacious'
import PrivateRoom from './PrivateRoom'
import VillaLocation from './villa'
import Time from './time'
export default function Villa() {
  return (
    <div>
      <VillaHeroBanner />
      <Spacious />
      <PrivateRoom />
      <VillaLocation />
      <Time />
    </div>
  )
}
