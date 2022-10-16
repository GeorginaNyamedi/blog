import React from "react";
import { SiSparkpost } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md">
        <nav className="flex justify-between py-5 max-w-7xl mx-auto">
         <div className="flex items-center text-xl">
            <SiSparkpost className="text-orange-500" />
          <span className="text-cyan-500">Gina's Blog</span>
         </div>
         <ul className="flex gap-5">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/add-post">Add Post</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Contacts</NavLink>
            </li>
         </ul>
        </nav>
        </div>
        
  )
}

export default Navbar;