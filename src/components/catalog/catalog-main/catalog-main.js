import React from "react";
import CatalogItemsContainer from "../catalog-items-container/catalog-items-container";
import CatalogFilters from "../catalog-filters/catalog-filters";
import "./catalog-main.css";
import { useQuery } from "@apollo/client";
import { GET_FILTERS_PARAMS_QUERY_NEW } from "../../../queries/queries";
const _ = require('lodash');
const queryString = require('querystring')

function CatalogMain() {

  const { loading, error, data } =useQuery(GET_FILTERS_PARAMS_QUERY_NEW);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  

  let filters = []
  let workingFilters
  

  var groups = _.groupBy(data.search.facetValues,'facetValue.facet.id')
  if (localStorage.getItem("workingFilters") !== null) {
      

    var query = queryString.parse(window.location.search)

    workingFilters = query["f"] || JSON.parse(localStorage.getItem("workingFilters"),true)
    filters = JSON.parse(localStorage.getItem("Filters"))
    

  } else {

    let arrayOfFilters = []
    let arrayOfWorkingFilters = []
    
    var groups = Object.entries(groups);
    
    groups.map((group)=>{

      var tempJSON = {
        "id": group[1][0].facetValue.facet.id,
        "name": group[1][0].facetValue.facet.name
      }
      
      let tempArray = []
      group[1].map((subGroups)=>{
        var tempJSON = {
          "id": subGroups.facetValue.id,
          "name": subGroups.facetValue.name
        }
        arrayOfWorkingFilters.push(subGroups.facetValue.id)
        tempArray.push(tempJSON)
      });
      
      tempJSON.subFilter = tempArray
      
      arrayOfFilters.push(tempJSON)
      
    })
      console.log(arrayOfWorkingFilters)
      console.log(arrayOfFilters)
      localStorage.setItem("Filters",JSON.stringify(arrayOfFilters))
      localStorage.setItem("workingFilters",JSON.stringify(arrayOfWorkingFilters))
    

    filters = arrayOfFilters
    workingFilters = arrayOfWorkingFilters
  }


  
  return (
    <div className="catalog-main__container">
      <div className="catalog-main__filters">
        <CatalogFilters filters={filters} workingFilters = {workingFilters}/>
      </div>
      <div className="catalog-main__items">
        <CatalogItemsContainer workingFilters={workingFilters}/>
      </div>
    </div>
  );
}

export default CatalogMain;
