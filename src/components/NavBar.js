import React, {useState} from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar() {
    const [navColors, setNavColors] = useState({home: "blue", newRecipe: "blue"});

    function changeNavColor(link){
        setNavColors(link == 0 ? {...navColors, home: "purple"} : {...navColors, newRecipe: "purple"}); 
    }

    return(
        <div className="nav-bar">
            <NavLink onClick={() => changeNavColor(0)} style={{color: navColors.home}} className="nav-link" to="/" exact >Home</NavLink>
            <NavLink onClick={() => changeNavColor(1)} style={{color: navColors.newRecipe}} className="nav-link" to="/new" exact >New Recipe</NavLink>
        </div>
    )
}

export default NavBar