import React from "react"



function RecipeCard({ recipe }) {
    return(
        <li>
            <img src={recipe.image} alt={recipe.name} style={{width: "200px"}}/>
            <h3>{recipe.name}</h3>
            <p>{recipe.rating}/5</p>
        </li>
    )
}

export default RecipeCard