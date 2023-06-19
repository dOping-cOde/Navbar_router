
import { NavLink } from "react-router-dom"
export default function Navbar(){

    return(
        <>
        <nav className="nav">
          <NavLink className="title" to="/">Home</NavLink>
          <ul>
            <li><NavLink to="/about" className="item">About</NavLink></li>
            <li><NavLink to="/pricing" className="item">Pricing</NavLink></li>
            <li><NavLink to="/services" className="item">Services</NavLink></li>
          </ul>
        </nav>
        </>
    )
}