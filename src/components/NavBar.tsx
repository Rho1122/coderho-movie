import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  navList: string[];
}
const NavBar = ({ navList }: NavBarProps) => {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          CODERHO MOVIE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navList.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={item === "Home" ? "/" : `/${item}`}
                  className={
                    navIndex === index ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  onClick={() => {
                    setNavIndex(index);
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
