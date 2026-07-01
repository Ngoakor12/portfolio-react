import { NavLink, Link } from "react-router";

function Nav() {
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/#about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/#projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
      <div className="quick-links">
        <Link to="#" className="quick-link">
          @
        </Link>
        <Link to="#" className="quick-link">
          #
        </Link>
        <Link to="#" className="quick-link">
          %
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
