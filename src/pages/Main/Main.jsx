import React from 'react'

import Menu from '../../Components/Menu'
import Stuff from '../../Components/Stuff/Stuff'
import Contact from '../../Components/Contact/Contact'
import Reservation from '../../Components/Reservition/Reservation'
import Carousel from '../../Components/carousel/Carousel'
export default function Main() {
  return (
    <>
      <Carousel/>
      <Menu/>
      <Stuff/>
      <Reservation/>
      <Contact/>
    </>
   
  )
}
