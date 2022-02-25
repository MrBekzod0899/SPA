import Aos from 'aos'
import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
Aos.init()
export default function MenuList({category}) {

  return (
    <div className='menulist container'>
        <div className="row p-2">
                {
                    category ? 
                    (
                        category.map((item,index)=>(
                            <MenuItem key={index} data-aos='zoom-in' {...item}/>
                        ))
                    ):<h1>Nothing Found</h1>
                }
        </div>

    </div>
  )
}
