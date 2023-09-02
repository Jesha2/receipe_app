import React from 'react';
import RecipeCard from './RecipeCard';
import "./homeComponents.css";


const RecipeDisplay = ({recipes,search}) => {
    const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe}/>
    })
    // console.log(recipeDisplay);
  return (
    <div className='recipe-display'>
       {recipeDisplay.length !== 0 ? recipeDisplay : <h2>There are no recipes matching your search</h2>}
    </div>
    // <RecipeCard recipes={recipes}></RecipeCard>
  )
}

export default RecipeDisplay;

