import React from "react";
import CatalogItemsContainer from "../catalog-items-container/catalog-items-container";
import CatalogFilters from "../catalog-filters/catalog-filters";
import "./catalog-main.css";
import { useQuery } from "@apollo/client";
import { GET_FILTERS_PARAMS_NEW_NEW } from "../../../queries/queries";
const _ = require('lodash');
const queryString = require('querystring')

function CatalogMain() {

  const { loading, error, data } =useQuery(GET_FILTERS_PARAMS_NEW_NEW);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


  let filters = []
  let subFilters = []
  let categories = []

  if (localStorage.getItem("workingCategories") !== null && localStorage.getItem("workingFilters") !== null) {
      

    var query = queryString.parse(window.location.search)
    
    filters = query["filter"] || JSON.parse(localStorage.getItem("workingFilters"))
    subFilters = query["sub-filter"] || JSON.parse(localStorage.getItem("workingSubFilters"))
    categories = query["category"] || JSON.parse(localStorage.getItem("workingCategories"))


  } else {

    
    let arrayOfFilters = []
    let arrayOfSubFilters = []
    let arrayOfCollections = []
    let arrayOfCategories = []
    let arrayOfWorkingFilters = []
    let arrayOfWorkingSubFilters = []

    data.products.items.map((id)=>{

      var dataForFilters = Object.entries(id)[1][1][0]
      var dataForCollections =  Object.entries(id)[2][1][0]
      if(typeof(dataForFilters) != "undefined"){
        var tempSubFilters = {
          "id": dataForFilters.facet.id,
          "name": dataForFilters.facet.name
        }
        arrayOfFilters.push(tempSubFilters)
        arrayOfWorkingFilters.push(tempSubFilters.id)


        var tempFilters = {
          "id": dataForFilters.id,
          "name": dataForFilters.name
        }
        arrayOfSubFilters.push(tempFilters)
        arrayOfWorkingSubFilters.push(tempFilters.id)
      }
      if(typeof(dataForCollections) != "undefined"){
        var tempCollections = {
          "id": dataForCollections.id,
          "name": dataForCollections.name
        }
        arrayOfFilters.push(tempFilters)
        arrayOfCollections.push(tempCollections)
        arrayOfCategories.push(tempCollections.id)
      }
      
    })
    arrayOfFilters = _.uniqBy(arrayOfFilters,'id')
    arrayOfSubFilters = _.uniqBy(arrayOfSubFilters,'id')
    arrayOfCollections = _.uniqBy(arrayOfCollections,'id')
    
      localStorage.setItem("filters",JSON.stringify(arrayOfFilters))
      localStorage.setItem("sub-filters",JSON.stringify(arrayOfSubFilters))
      localStorage.setItem("collections",JSON.stringify(arrayOfCollections))
      localStorage.setItem("workingFilters",JSON.stringify(arrayOfWorkingFilters))
      localStorage.setItem("workingSubFilters",JSON.stringify(arrayOfWorkingSubFilters))
      localStorage.setItem("workingCategories",JSON.stringify(arrayOfCategories))


    filters = arrayOfWorkingFilters
    categories = arrayOfCategories
    subFilters = arrayOfWorkingSubFilters
  }


  return (
    <div className="catalog-main__container">
      <div className="catalog-main__filters">
        <CatalogFilters categories={categories} subFilters={subFilters} filters={filters} />
      </div>
      <div className="catalog-main__items">
        <CatalogItemsContainer categories={categories} filters={filters} subFilters={subFilters}/>
      </div>
    </div>
  );
}

export default CatalogMain;
