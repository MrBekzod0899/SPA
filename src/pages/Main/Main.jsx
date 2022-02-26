import React, { useEffect,useState} from 'react'

import Menu from '../../Components/Menu'
import Stuff from '../../Components/Stuff/Stuff'
import Contact from '../../Components/Contact/Contact'
import Reservation from '../../Components/Reservition/Reservation'
import Carousel from '../../Components/carousel/Carousel'
import Header from '../Header'
import Footer from '../Footer'
import Loader from '../../Components/Loader/Loader'
import {getListCategories} from '../../api'
export const LoadingContext=React.createContext();

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getListCategories().then(data=>{
      setCategory(data.categories)
      console.log(data)
      setLoading(false)
    })
  }, []);
  return (
    <LoadingContext.Provider value={category}>
      {
        loading ?  <Loader/> :
       <>
        <Header/>
        <Carousel/>
        <Menu/>
        <Stuff/>
        <Reservation/>
        <Contact/>
        <Footer/>
        </>
      }   
    </LoadingContext.Provider>
   
  )
}
