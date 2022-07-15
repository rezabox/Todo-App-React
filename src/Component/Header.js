import { Link, NavLink } from "react-router-dom";

function Header(){
   return(
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
    <div className="container-fluid">
      <NavLink className={(navData) => navData.isActive ? "nav-link active": "nav-link"} to="/">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-1 mb-lg-0 ">
          <li className="nav-item">
            <NavLink className={(navData) => navData.isActive ? "nav-link active": "nav-link"} aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(navData) => navData.isActive ? "nav-link active": "nav-link"} to="/tdo">Tdo</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   )
}
export default Header;