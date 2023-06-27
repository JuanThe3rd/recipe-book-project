import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import AddRecipeForm from "./AddRecipeForm";
import NavBar from "./NavBar";

const API = "http://localhost:3000/recipes"


function App() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => fetch(API)
        .then(res => res.json())
        .then(setRecipes), [])

    return (
        <div>
            <h1 className="header">Recipe Book</h1>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home recipes={recipes} />
                </Route>
                <Route path="/new" >
                    <AddRecipeForm />
                </Route>
            </Switch>
        </div>
    )
}

export default App;