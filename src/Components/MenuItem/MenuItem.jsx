import Aos from 'aos'
import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuItem(props) {
    const {strCategory,strCategoryDescription,strCategoryThumb}=props
    Aos.init()
   
  return (
    <div data-aos="zoom-in-right"  className='menuitem card' style={{width:'100%'}}>
        <div className="card-body">
            <div className="card-img">
                <img  src={strCategoryThumb} alt={strCategory} />
            </div>
        </div>
        <div className='card-content'>
            <h4 data-aos="fade-up">{strCategory}</h4>
            <p data-aos="fade-up">{strCategoryDescription.slice(0,100)}
            {strCategoryDescription.length>100 && '...'}
            </p>
           { strCategoryDescription.length>100 && <p><a className='text-primary' href="#!"  >Read more</a></p>}
            <Link to={`/category/${strCategory}`} className="btn">
                Watch Category
            </Link>
        </div>
    </div>
  )
}
