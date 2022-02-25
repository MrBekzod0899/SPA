 
import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import { getFullDetails } from "../../api";
import Carousel from "../carousel/Carousel";
import './index.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '10%',
  left: '27%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function Reciepe() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [recipe, setRecipe] = useState([])
  const {id} = useParams()


  useEffect(() => {
    getFullDetails(id).then(data => {
        setRecipe(data.meals[0])
        console.log(data)
    })
  }, [])
  return (
    <div style={{marginTop:'100px',width:'600px',backgroundColor:'white'}}>
      <Button onClick={handleOpen}>Open modal</Button>
       <Modal
         style={{overflow:'scroll'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div  className="product">
                <div  className="product-image">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
            </div>
            <div className="recipe"> 
          <h6><b>Category:</b> {recipe.strCategory}</h6>
          {recipe.strArea ? <h6><b>Area:</b> {recipe.strArea}</h6> : null}
          
            <table className="centred table table-bordered table-striped table-hover">
              <thead>
              <tr>
                <th>Ingredient</th>
                <th>Pictures</th>
                <th>Measure</th>
              </tr>
              </thead>
              <tbody>
              {Object.keys(recipe).map(key => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr>
                      <td>{recipe[key]}</td>
                      <td><img width={150} height={150} src={`https://www.themealdb.com/images/ingredients/${recipe[key]}.png`} alt='ingridient'/></td>
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
              <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id}  />
        </div>
        </Box>
      </Modal>
    </div>
  )
}