import React from "react";
import avocado from "../../assets/avocado.jpeg";
import "./DetailScreen.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailScreen = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState([]);

	//const apiUrl = `https://`https://recipes.devmountain.com/recipes/${id}`;
	// const getRecipe=()=>{
	//   axios.get(apiUrl)
	//   .then(res=>{console.log(res.data)
	//         setRecipe(res.data);
	//         }
	//     )
	//    .catch(e=>console.error("Error during http request for recipe "+e))
	// } OR you can just do below to ovoid creation of extra var

	useEffect(() => {
		axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
			console.log(res.data);
			setRecipe(res.data);
		});
	}, [id]);

	return (
		<section>
			{/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}

			<div
				style={{
					background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
					backgroundSize: "cover",
				}}
				className="adBanner"
			>
				<h1>{recipe.recipe_name}</h1>
			</div>
			<div className="flex-row div-recipe">
				<div className=" flex-col, recipe-details">
					<h2>Recipe</h2>
					<h4>Prep Time: {recipe.prep_time}</h4>
					<h4> Cook Time: {recipe.cook_time}</h4>
					<h4>Serves: {recipe.serves}</h4>
					<br />
					<h2>Ingredients</h2>
					{recipe.ingredients &&
						recipe.ingredients.map((ingredient, index) => {
							return (
								<h4>
									{ingredient.ingredient} : {ingredient.quantity}{" "}
								</h4>
							);
						})}
				</div>
				<div className="instruction-detail" >
					<h2>Instructions</h2>
					<p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
				</div>
			</div>
		</section>
	);
};

export default DetailScreen;
