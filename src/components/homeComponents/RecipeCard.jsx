import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./homeComponents.css";

// import avocado from "../../assets/avocado.jpeg";
// import salmon from "../../assets/salmon.jpg";
// src/assets/avocado.jpeg

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  
  return (
      <div className='recipe-card'>

          <img src={recipe.image_url} alt="Recipe" />
          <h4> {recipe.recipe_name}</h4>
          <button className="blue-btn" onClick={handleClick}>See More</button>
          {/* <Link to ={`/recipe/${recipe.recipe_id}`}>
            <button className="blue-btn">See More</button>
          </Link> */}
       </div>

  )
}

export default RecipeCard;


