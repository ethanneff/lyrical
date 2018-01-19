import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Main = props => {
  const { items } = props;
  if (!items || items.length === 0) return <div />;

  const collectionItems = props.items.map(item => {
    const { id, title, subtitle, buttons } = item;
    const buttonGroup = !buttons
      ? null
      : buttons.map((button, index) => {
          const { icon, onClick } = button;
          return (
            <i
              key={index}
              className="material-icons secondary-content"
              onClick={() => onClick(item, button)}
            >
              {icon}
            </i>
          );
        });
    const subtitleGroup =
      !subtitle || subtitle === "0" ? null : (
        <div className="subtitle secondary-content">{subtitle}</div>
      );
    return (
      <li key={id} className="collection-item">
        {title}
        {buttonGroup}
        {subtitleGroup}
      </li>
    );
  });

  return <ul className="collection">{collectionItems}</ul>;
};

Main.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      id: PropTypes.string.isRequired,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          onClick: PropTypes.func.isRequired
        }).isRequired
      )
    }).isRequired
  ).isRequired
};

Main.defaultProps = {};

export default Main;
