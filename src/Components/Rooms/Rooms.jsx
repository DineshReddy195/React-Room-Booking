import React from 'react'
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../RoomContainer/RoomContainer';


function Rooms() {
  return (
    <div>
      <Hero hero='roomsHero'>
      <Banner title='Our Rooms'>
        <Link to='/' className='btn-primary'>Return Home</Link>
      </Banner>
      </Hero>
      <RoomContainer/>
    </div>
  )
}

export default Rooms
