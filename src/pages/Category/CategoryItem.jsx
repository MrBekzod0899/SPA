import Aos from 'aos'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({elem}) {
    const {idMeal,strMeal,strMealThumb}=elem
  Aos.init({
    once: true,
    duration:2000
  })
  return (
    <>
      <div data-aos="flip-right" className="product">
        <div data-aos="fade-down" className="product-image">
          <img src={strMealThumb} alt="product" />
        </div>
        <div className="product-description">
          <div className="product-name">
            <h4>Product Name</h4>
            <span>{strMeal}</span>
          </div>
          <span className="product-price">{(Math.random()*50+1).toFixed(2)  }$</span>
          <div className="product-info">
            <span>
              Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Facere
              deserunt consectetur,
            </span>
          </div>
          <div className="product-action">
            <Link className="btn" to={`/${idMeal}`}>
                 See Ingridient
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
