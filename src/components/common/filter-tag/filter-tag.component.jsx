import React from "react";
import { ReactComponent as RemoveIcon } from "../../../assets/cross.svg";

import "./filter-tag.component.css";

const FilterTag = ({ value, removeFacetsValues, typeName, id }) => {
  const onRemove = () => {
    removeFacetsValues(typeName, id);
  };

  return value ? (
    <div className="filter-tag">
      <span className="h6-regular filter-tag__value">
        {value.anem || value}
      </span>
      <RemoveIcon
        className="filter-tag__remove"
        onClick={onRemove}
      />
    </div>
  ) : (
    ""
  );
};

export default FilterTag;
