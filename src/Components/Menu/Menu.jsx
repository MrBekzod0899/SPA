import React, { useEffect,useState} from 'react'
import { getListCategories } from '../../api';
import MenuList from '../MenuList/MenuList';
import './index.css'
export default function Menu() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
      getListCategories().then(data=>setCategory(data.categories))
    }, []);

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
