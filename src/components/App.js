import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import Album from "./Album";
import RecipeDetails from "./RecipeDetails";


const API = "http://localhost:3001/recipes"


function App() {
    const [recipes, setRecipes] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(setRecipes)
    }, [])

    function handleRecipeDetailClick(recipe){
        setRecipeDetails(recipe);
    } 

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Album recipes={recipes} recipeDetailClick={handleRecipeDetailClick}/>
                </Route>
                <Route path="/new" >
                    <AddRecipeForm />
                </Route>
                <Route path="/recipe-details">
                    <RecipeDetails recipe={recipeDetails}/>
                </Route>
            </Switch>
        </div>
        
    )
}

export default App;