import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div className="container col-md-6">
      <h2>{props.title} </h2>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "default apps",
};

export default Navbar;
