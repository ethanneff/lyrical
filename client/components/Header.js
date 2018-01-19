import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import classNames from "classnames";

const Main = props => {
  const { hasButton, nav, icon, title, primaryColor } = props;
  const button = !hasButton ? null : (
    <Link
      className={classNames("btn btn-floating right", {
        white: !primaryColor
      })}
      to={nav}
    >
      <i className={classNames("material-icons", { back: !primaryColor })}>
        {icon}
      </i>
    </Link>
  );

  return (
    <div className="nav-wrapper">
      {button}
      <h4>{title}</h4>
    </div>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  nav: PropTypes.string,
  icon: PropTypes.string,
  primaryColor: PropTypes.bool,
  hasButton: PropTypes.bool
};

Main.defaultProps = {
  icon: "navigate_before",
  nav: "/",
  primaryColor: false,
  hasButton: true
};

export default Main;
