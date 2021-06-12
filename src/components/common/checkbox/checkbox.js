import React from "react";
import "./checkbox.css";

function Checkbox(props) {
  const { value,onClick,checkedTrue } = props;
  let inputHtml = <input type="checkbox"/>
  if(checkedTrue){
    inputHtml = <input type="checkbox" checked/>
  }
  return (
    <label className="container h6-regular" onClick={onClick}>
      {inputHtml}
      <span className="checkmark"></span>
      {value}
    </label>
  );
}

export default Checkbox;
