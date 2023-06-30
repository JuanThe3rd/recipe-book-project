import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import Album from "./Album";
import RecipeDetails from "./RecipeDetails";
import { AppBar,Toolbar,Typography } from "@mui/material";
import NavBar from "./NavBar";


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
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <NavBar />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/">
                    <Album recipes={recipes} addLike={addLike} removeLike={removeLike} recipeDetailClick={handleRecipeDetailClick}/>
                </Route>
                <Route path="/new" >
                    <AddRecipeForm onClick={addNewRecipe} />
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
    function addNewRecipe(recipe){
        fetch(API, {
            method: "POST",
            headers:{
                Accepts: "aplication/json",
                "Content-type" : "application/json",
            },
            body: JSON.stringify(recipe),
        })
            .then(res => res.json())
            .then(json => setRecipes([...recipes, json]))
    }
}

export default App;