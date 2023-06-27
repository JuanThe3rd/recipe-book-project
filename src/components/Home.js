import React from "react"
import RecipeCard from "./RecipeCard";

function Home({ recipes }) {
    return (
        <ul>
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </ul>
    )
}

export default Home;