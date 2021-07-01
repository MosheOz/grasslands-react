import React from "react";
import "./checkbox.css";

function Checkbox({
  updateFacetsValues,
  removeFacetsValues,
  value,
  facetValue,
  isChecked,
}) {
  const handleChange = (e) => {
    e.target.checked
      ? updateFacetsValues(facetValue)
      : removeFacetsValues(facetValue);
  };

  let checkbox = (
    <input type="checkbox" checked={isChecked} onChange={handleChange} />
  );

  return (
    <label className="container h6-regular">
      {checkbox}
      <span className="checkmark"></span>
      {value}
    </label>
  );
}

export default Checkbox;
