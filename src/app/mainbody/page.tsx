"use client"
import React from 'react'
import { categories } from '../utils/utils'
import Tile from '../tiles/page'

const MainBody = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col" style={{ gap: '16px' }}>
    <div className="flex justify-evenly items-center px-[10%] py-10">
    <img
      src="/assets/deal.png"
      alt="Image 1"
      className="max-w-xs h-auto"
    />
    <img
      src="/assets/dealBurger.png"
      alt="Image 2"
      className="max-w-xs h-auto"
    />
  </div>

  <div className="px-[10%] py-6 overflow-x-auto">
  <div className="flex justify-around gap-4 min-w-max">
    {categories.map((cat) => (
      <Tile
        key={cat.id}
        label={cat.label}
        icon={cat.icon}
        
      />
    ))}
  </div>
</div>

<h4 className="px-[10%] py-6">Nearby Reastaurants</h4>

<div className="flex justify-evenly items-center px-[10%] py-10">
    <img
      src="/assets/restaurant.png"
      alt="Image 1"
      className="max-w-xs h-auto"
    />
    <img
      src="/assets/restaurant 2.png"
      alt="Image 2"
      className="max-w-xs h-auto"
    />
     <img
      src="/assets/restaurant 3.png"
      alt="Image 2"
      className="max-w-xs h-auto"
    />
  </div>
  </div>
  )
}

export default MainBody;
