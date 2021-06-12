import React from "react";
import "./checkbox.css";

function Checkbox(props) {
  const { value,onClick } = props;
  return (
    <label className="container h6-regular" onClick={onClick}>
      <input type="checkbox" onChangeCapture={onClick}/>
      <span className="checkmark"></span>
      {value}
    </label>
  );
}

export default Checkbox;
