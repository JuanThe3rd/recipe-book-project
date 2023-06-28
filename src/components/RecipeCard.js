import React from "react"

function RecipeCard({ recipe }) {
    return(
        <div className="recipe-card">
            <div className="recipe-img">
                <img src={recipe.image} alt={recipe.name} style={{width: "200px"}}/>
            </div>
            <h3>{recipe.name}</h3>
            <p>{recipe.rating}</p>
        </div>
    )
}

export default RecipeCard