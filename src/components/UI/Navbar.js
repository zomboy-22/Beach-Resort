import logo from "../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  let ulStyle = isOpen
    ? `${classes["nav-links"]} ${classes["show-nav"]}`
    : classes["nav-links"];

  return (
    <nav className={classes.navbar}>
      <div className={classes["nav-center"]}>
        <div className={classes["nav-header"]}>
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button
            onClick={toggleHandler}
            type="button"
            className={classes["nav-btn"]}
          >
            <FaAlignRight className={classes["nav-icon"]} />
          </button>
        </div>
        <ul className={ulStyle}>
        <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/rooms"
            >
              Rooms
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
