import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import Album from "./Album";
import RecipeDetails from "./RecipeDetails";


const API = "http://localhost:3001/recipes"


function App() {
    const [recipes, setRecipes] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => fetch(API)
        .then(res => res.json())
        .then(setRecipes), [])

    function handleRecipeDetailClick(recipe){
        setRecipeDetails(recipe);
    }

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Album recipes={recipes} addLike={addLike} removeLike={removeLike} recipeDetailClick={handleRecipeDetailClick}/>
                </Route>
                {/* <Route>
                   not fully put together  <Recipe recipes={recipes} />

                </Route> */}
                <Route path="/new" >
                    <AddRecipeForm recipes={recipes} />
                </Route>
                <Route path="/recipe-details">
                    <RecipeDetails recipe={recipeDetails}/>
                </Route>
            </Switch>
        </div>
        
    )

    function addLike(recipe) {
        const newRecipeList = recipes.map(r => r.id !== recipe.id ? r : {...r, liked: true})
        setRecipes(newRecipeList)
        
        fetch(`${API}/${recipe.id}`, {
            method: "PATCH",
            body: JSON.stringify({ liked: true }),
            headers: {
                accepts: "application/json",
                "Content-type": "application/json"
            },
        })
    }
    function removeLike(recipe) {
        const newRecipeList = recipes.map(r => r.id !== recipe.id ? r : {...r, liked: false})
        setRecipes(newRecipeList)
        
        fetch(`${API}/${recipe.id}`, {
            method: "PATCH",
            body: JSON.stringify({ liked: false }),
            headers: {
                accepts: "application/json",
                "Content-type": "application/json"
            },
        })
    }
}

export default App;