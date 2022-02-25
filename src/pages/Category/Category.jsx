import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getFilterCategoria } from '../../api'
import Carousel from '../../Components/carousel/Carousel'
import Reservation from '../../Components/Reservition/Reservation'
import CategoryItem from './CategoryItem'
import './index.css'

export default function Category() {
    let { name } = useParams()
    const [FilterCategoria, setFilterCategoria] = useState([]);

    useEffect(() => {
        getFilterCategoria(name).then(res => {
            setFilterCategoria(res.meals)
            console.log(res.meals)
        })

    }, [name]);

    return (
        <>
         <Carousel />
            <div className='container category'>
                <div className="row">
                    {
                        FilterCategoria ?
                            (
                                FilterCategoria.map((item, index) => (
                                    <CategoryItem key={index} elem={item} />
                                ))
                            ) : <h1>Nothing Found</h1>
                    }
                </div>
            </div>
            <Reservation />
        </>

    )
}
