import React from "react"
import RecipeCard from "./RecipeCard";

function Home({ recipes }) {
    return (
        <div>
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    )
}

export default Home;