import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = (props) => {
  const { header } = props;
  const [theme, setTheme] = useState(true);

  const handleLight = () => {
    document.documentElement.style.setProperty("--theme-background", "white");
    document.documentElement.style.setProperty("--theme-color", "black");
    setTheme(!theme);
  };

  const handleDark = () => {
    document.documentElement.style.setProperty("--theme-background", "black");
    document.documentElement.style.setProperty("--theme-color", "white");
    setTheme(!theme);
  };

  return (
    <div className="navbar">
      <h1>
        <b>{header}</b>
        <hr className="hr" />
      </h1>
      <ul>
        <li>
          <Link
            className="navLink"
            to="/"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <b> Home</b>
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            to="/add"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <b> Add User</b>
          </Link>
        </li>
      </ul>
      <i
        id="toggle"
        onClick={theme ? handleDark : handleLight}
        className={theme ? "fa-solid fa-moon" : "fa-solid fa-sun"}
      ></i>
    </div>
  );
};
