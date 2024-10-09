import React from 'react'
import Navbar from './Navbar'

function LikedMeals({liked}) {
  return (
    <div className="mt-20">
      <Navbar />
      <p>No liked Foods</p>
  </div>
  )
}

export default LikedMeals