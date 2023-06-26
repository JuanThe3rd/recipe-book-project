import React, { useEffect, useState } from "react"
import Home from "./Home"
import AddRecipeForm from "./AddRecipeForm";

const API = "http://localhost:3000/recipes"


function App(){
    const [recipes, setRecipes] = useState([])

    useEffect(() => fetch(API)
    .then(res => res.json())
    .then(setRecipes), [])

    return (
        <div>
            <Home recipes={recipes}/>
            <AddRecipeForm />
        </div>
    )
}

export default App;