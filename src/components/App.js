import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import Album from "./Album";


const API = "http://localhost:3001/recipes"


function App() {
    const [recipes, setRecipes] = useState([]);
    const [navColors, setNavColors] = useState({home: "blue", newRecipe: "blue"})

    useEffect(() => fetch(API)
        .then(res => res.json())
        .then(setRecipes), [])

    function handleNavClick(link){
        setNavColors(link == 0 ? {...navColors, home: "purple"} : {...navColors, newRecipe: "purple"})
    }

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Album recipes={recipes} navClick={handleNavClick} navColors={navColors}/>
                </Route>
                <Route path="/new" >
                    <AddRecipeForm navClick={handleNavClick} navColors={navColors}/>
                </Route>
            </Switch>
        </div>
        
    )
}

export default App;