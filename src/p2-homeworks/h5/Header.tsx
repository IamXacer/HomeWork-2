import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>

        </div>
    )
}

export default Header
