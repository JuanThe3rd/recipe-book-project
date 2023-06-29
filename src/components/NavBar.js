import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar() {
    return(
        <div>
            <NavLink className="nav-link" to="/" exact >Home</NavLink>
            <NavLink className="nav-link" to="/new" exact >New Recipe</NavLink>
        </div>
    )
}

export default NavBar

