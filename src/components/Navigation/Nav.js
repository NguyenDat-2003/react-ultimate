import "./Nav.scss";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div class="topnav">
      <NavLink class="active" to="/" exact>
        Home
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default Nav;
