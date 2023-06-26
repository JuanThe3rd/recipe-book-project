import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar() {

    return(
        <div>
            <NavLink to="/" exact >Home</NavLink>
            <NavLink to="/new" exact >New Recipe</NavLink>
        </div>
    )
}

export default NavBar