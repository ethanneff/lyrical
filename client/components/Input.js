import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Main = props => {
  const { value, label, placeholder, onChange, onSubmit, onRef } = props;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div>
        <label>{label}</label>
        <input
          ref={e => onRef(e)}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          value={value}
        />
      </div>
    </form>
  );
};

Main.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onRef: PropTypes.func
};

Main.defaultProps = {
  onRef: () => {}
};

export default Main;
