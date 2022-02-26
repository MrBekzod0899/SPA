import Aos from 'aos'
import React,{useState} from 'react'
import Reciepe from '../../Components/Reciepe/Reciepe'

export default function CategoryItem({elem}) {
    const {idMeal,strMeal,strMealThumb}=elem
    const [open,setOpen]=useState(false)
  Aos.init({
    once: true,
    duration:500
  })
  return (
    <>
      <div data-aos="flip-right" className="product" >
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
            <button  className="btn btn-primary" onClick={()=>setOpen(!open)}>
                 See Ingridient
            </button>
          </div>
        </div>
      </div>
      {
          open &&
          <Reciepe handleOpen={setOpen} id={idMeal} open={open}/>
      }
    </>
  )
}
