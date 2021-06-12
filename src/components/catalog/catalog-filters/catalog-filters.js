import React from "react";
import "./catalog-filters.css";
import Checkbox from "../../common/checkbox/checkbox";
import { useQuery } from "@apollo/client";
import { GET_FILTERS_PARAMS_NEW_NEW } from "../../../queries/queries";
import { update } from "lodash";
const _ = require('lodash');

function CatalogFilters(props) {

    const { filters, subfilters, categories} = props

    let filtersData = []
    let subFiltersData = []
    let categoriesData = []
    filtersData = JSON.parse(localStorage.getItem("filters"))
    subFiltersData = JSON.parse(localStorage.getItem("sub-filters"))
    categoriesData = JSON.parse(localStorage.getItem("collections"))

    

    function updateUrl(id,section){
      if(section === 1){
        window.location = window.location.pathname+"?&category=selected"+window.location.search.replace("?","")+"&category="+id
      }
      else if(section === 2){
        window.location = window.location.pathname+"?&filter=selected"+window.location.search.replace("?","")+"&filter="+id
      }
      else if(section === 3){
        window.location = window.location.pathname+"?&sub-filter=selected"+window.location.search.replace("?","")+"&sub-filter="+id
      }
    }

  return (
    <div className="catalog-filters">
    
      <div className="h4-medium catalog-filters__title">Filters</div>

      <Checkbox value="Sale" />

      <div className="catalog-filters__spotlight">
        <div className="h6-medium">Spotlight</div>
        <div className="catalog-filters__spotlight__checkboxes">
          <Checkbox value="Seasonal" />
          <Checkbox value="Local" />
        </div>
      </div>

      <div className="catalog-filters__spotlight">
        <div className="h6-medium">Categories</div>
        <div className="catalog-filters__spotlight__checkboxes">
          { 
            categoriesData && categoriesData.map((item)=>{
              return(
                <Checkbox value={item.name} onClick={(e)=>{updateUrl(item.id,1)}} />
              )
            })
          }
        </div>
      </div>

      <div className="catalog-filters__spotlight">
        <div className="h6-medium">Filters</div>
        <div className="catalog-filters__spotlight__checkboxes">
          { 
            filtersData && filtersData.map((item)=>{
              return(
                <Checkbox value={item.name} onClick={()=>{updateUrl(item.id,2)}}/>
              )
            })
          }
        </div>
      </div>


      <div className="catalog-filters__spotlight">
      <div className="h6-medium">Sub-Filters</div>
      <div className="catalog-filters__spotlight__checkboxes">
        { 
          subFiltersData && subFiltersData.map((item)=>{
            return(
              <Checkbox value={item.name} onClick={()=>{updateUrl(item.id,3)}}/>
            )
          })
        }
      </div>
      </div>
  </div>
  );
}

export default CatalogFilters;
