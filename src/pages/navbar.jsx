import { Link } from "react-router-dom";
import "../style/navbar.css";

export const Navbar = (props) => {
  const { header } = props;
  return (
    <div className="navbar">
      <h2>{header}</h2>
      <ul>
        <li>
          <Link className="navLink" to="/">
            <b> Home</b>
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/add">
            <b> Add User</b>
          </Link>
        </li>
      </ul>
    </div>
  );
};
