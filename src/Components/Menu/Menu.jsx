import React, { useContext} from 'react'

import { LoadingContext } from '../../pages/Main/Main';
import MenuList from '../MenuList/MenuList';
import './index.css'

export default function Menu() {
    const category=useContext(LoadingContext)  
  return (
    <div id="menu" className="menu pt-4">
        <div className="container">
          <div className="row m-3" style={{textAlign:'center'}}>
          <h1>Our Menu</h1>
          </div>
        </div>
        <MenuList category={category} />
    </div>
  )
}
