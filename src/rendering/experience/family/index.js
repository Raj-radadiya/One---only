import React from 'react'
import FamilyHerobanner from './herobanner'
import FamilyTime from './familyTime'
import FamilyActivities from './familyActivities'
import FamilyCooking from './familyCooking'

export default function Family() {
  return (
    <div>
        <FamilyHerobanner/>
        <FamilyTime/>
        <FamilyActivities/>
        <FamilyCooking/>
    </div>
  )
}
