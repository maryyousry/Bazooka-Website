import React from 'react'
import NavBar from './Components/NavBar'
import Screen from './Components/Screen'
import BestSellers from './Components/BestSeller'

export default function app() {
  return (
    <div className=''>
        <NavBar/>
        <Screen/>
        <BestSellers />
    </div>
  )
}
