import React from 'react'
import ActivitiesHerobanner from './activities'
import Explore from './explore'
import Sea from './sea'
import Land from './land'
import Tradition from './tradition'
export default function Activity() {
  return (
    <div>
      <ActivitiesHerobanner />
      <Explore />
      <Sea />
      <Land />
      <Tradition />
    </div>
  )
}
