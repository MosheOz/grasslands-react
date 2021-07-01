import React, { useState } from "react";
// useReducer//
const initialState = {
  isInit: true,
  facetFaluesPerCollectionInit: true,
  term: "",
  facetValuesDefaultFilters: [],
  facetFaluesDefaultPerCollection: [],
  facetValueIdsPerCollection: [],
  facetValueIds: [],
  collectionId: null,
};

const FilterContext = React.createContext(initialState);

const FilterContextProvider = ({ children }) => {
  const [searchState, setSearchState] = useState(initialState);
	
  return (
    <FilterContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
