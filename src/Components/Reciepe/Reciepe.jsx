import { useEffect, useState } from "react";
import { getFullDetails } from "../../api";
import './index.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Loader from "../Loader/Loader";
import { Button, ModalBody, ModalHeader } from "reactstrap";
import { ModalFooter } from "react-bootstrap";


export default function Reciepe({ id, open,handleOpen}) {
  const [recipe, setRecipe] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getFullDetails(id).then(data => {
      setRecipe(data.meals[0])
      console.log(data)
      setLoading(false)
    })
  }, [id])

  return (
    loading ? <Loader /> :
      <div className="modalReciepe">
        <div className="modalItem">
          <button onClick={()=>handleOpen(!open)} className="btn btn-secondary btnClose" style={{position:'absolute', top:'10px',right:'10px'}}>&times;</button>
          <div className="productReciepe">
            <div className="product-image">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>
          </div>
          <div className="recipe">
            <h6><b>Category:</b> {recipe.strCategory}</h6>
            {recipe.strArea ? <h6><b>Area:</b> {recipe.strArea}</h6> : null}
            <table className=" reciepeTable centred table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Pictures</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key, index) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={index} className="tBodyReciepe">
                        <td>{recipe[key]}</td>
                        <td><img width={150} height={150} src={`https://www.themealdb.com/images/ingredients/${recipe[key]}.png`} alt='ingridient' /></td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
          <div>
            <h5>Video Recipe</h5>
            <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id} />
          </div>
        </div>
      </div>

  )
}


