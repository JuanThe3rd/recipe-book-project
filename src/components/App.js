import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import Album from "./Album";


const API = "http://localhost:3001/recipes"


function App() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => fetch(API)
        .then(res => res.json())
        .then(setRecipes), [])
    return (
        
        <div>
            <h1 className="header">Recipe Book</h1>

            <Switch>
                <Route exact path="/">
                    {/* <Home recipes={recipes} /> */}
                    <Album recipes={recipes} />
                </Route>
                <Route path="/new" >
                    <AddRecipeForm />
                </Route>
            </Switch>
        </div>
        
    )
}

export default App;