import React from "react"
import RecipeCard from "./RecipeCard";

function Home({ recipes }){
    return(
        <div>
            <h1>Recipe Book</h1>
            <ul>
                {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
            </ul>
        </div>
    )
}

export default Home;