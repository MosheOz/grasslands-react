import React from "react";
import "./checkbox.css";

function Checkbox(props) {
  const { value } = props;
  return (
    <label className="container h6-regular">
      <input type="checkbox" />
      <span className="checkmark"></span>
      {value}
    </label>
  );
}

export default Checkbox;
