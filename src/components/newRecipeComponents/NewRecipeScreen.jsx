import React, { useState } from "react";
import "./NewRecipeScreen.css";
import { Formik } from "formik";
import axios from "axios";
// Formik helps manage the state of the form, track changes in input values, and handle form submission effortlessly. inside the Formik tag, we pass props for initialValues and Onsubmit handler and can also pass form validator in props and in between tags ,pass am arrow CB function  with an object contaning values, changehandle,handlesumit... as the arg and  the CB returns the form element
// with
const NewRecipeScreen = () => {
	const [ingredients, setIngredients] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");

	const addIngredient =()=>{
	    setIngredients([...ingredients, { name, quantity }]);
		setName("");
		setQuantity("");
		console.log(ingredients)

	};
	

	const ingredientDisplay = ingredients.map((ingredient, index) => {
		return (
			<li key={index}>
				{ingredient.quantity} {ingredient.name}
			</li>
		);
	});

	const initialValues = {
		type: "",
		recipeName: "",
		imageURL: "",
		prepTime: "",
		cookTime: "",
		serves: "",
		ingredients: [],
		instructions: "",
	};

	const onSubmit = (values) => {
		// addIngredient();
		values.ingredients = ingredients;
		values.instructions = JSON.stringify(values.instructions);
		//console.log(values);
		axios
			.post(`https://recipes.devmountain.com/recipes`, values)
			.then(res=>console.log(res.data))
			.error(e=>console.log("Error in axios call  "+e))
	}

	return (
		<section>
			<h1>Tell us about your Recipe!</h1>
			{/* initialValues :An object that defines the initial values of form fields. It typically contains keys representing field names and their initial values. this obj and onSubmit is passed as a props to Formik */}
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						{/* <label >Recipe Name</label> */}
						<div className="div-input">
							<input
								placeholder="Title your Recipe!"
								value={values.recipeName}
								onChange={handleChange}
								name="recipeName"
							/>

							<input
								placeholder="Paste img url!"
								value={values.imageURL}
								onChange={handleChange}
								name="imageURL"
							/>
						</div>
						<div className=" div-radio">
							<span>
								<input
									type="radio"
									value="Cook"
									onChange={handleChange}
									name="type"
								/>
								<h5>Cook</h5>
							</span>
							<span>
								<input
									type="radio"
									value="bake"
									onChange={handleChange}
									name="type"
								/>
								<h5>Bake</h5>
							</span>
							<span>
								<input
									type="radio"
									value="drink"
									onChange={handleChange}
									name="type"
								/>
								<h5>Drink</h5>
							</span>
						</div>
						<div className="div-input">
							<input
								placeholder="Prep !"
								value={values.prepTime}
								onChange={handleChange}
								name="prepTime"
							/>

							<input
								placeholder="Cook Time"
								value={values.cookTime}
								onChange={handleChange}
								name="cookTime"
							/>
							<input
								placeholder="Serves!"
								value={values.serves}
								onChange={handleChange}
								name="serves"
							/>
						</div>
						<h3>Ingredients</h3>
						<div className="div-input">
							<div className="div-ingredient">
								<input
									placeholder="Ingredient"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									placeholder="Quantity"
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}
								/>
							</div>
							<ul>{ingredientDisplay}</ul>
						</div>
						<button
							type="button"
							className="orange-btn"
							onClick={addIngredient}
						>
							Click to add to the ingredient list
						</button>
						<textarea
							placeholder="Type your instructions"
							rows={8}
							value={values.instructions}
							onChange={handleChange}
							name="instructions"
						/>
						<button type="submit" className="blue-btn">
							Submit
						</button>
					</form>
				)}
			</Formik>
		</section>
	);
};

export default NewRecipeScreen;
// // This form will have 7 input tags, 3 radio buttons, and 1 textArea. Make sure to size the inputs to an appropriate size (follow good UI/UX decisions).

// Inputs you will need: recipeName, imageURL, prepTime, cookTime, serves, ingredient, quantity

// textArea: instructions

// Radio buttons: Cook, Bake, Drink
