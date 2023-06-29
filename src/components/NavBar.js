import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar({navClick, navColors}) {
    return(
        <div>
            <NavLink onClick={() => navClick(0)} style={{color: navColors.home}} className="nav-link" to="/" exact >Home</NavLink>
            <NavLink onClick={() => navClick(1)} style={{color: navColors.newRecipe}} className="nav-link" to="/new" exact >New Recipe</NavLink>
        </div>
    )
}

export default NavBar