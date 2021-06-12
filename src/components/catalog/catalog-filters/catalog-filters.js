import React from "react";
import "./catalog-filters.css";
import Checkbox from "../../common/checkbox/checkbox";
import { useQuery } from "@apollo/client";
import { GET_FILTERS_PARAMS_NEW_NEW } from "../../../queries/queries";
import { update } from "lodash";
const _ = require('lodash');

function CatalogFilters(props) {

    var { filters, subFilters, categories} = props

    let filtersData = []
    let subFiltersData = []
    let categoriesData = []
    filtersData = JSON.parse(localStorage.getItem("filters"))
    subFiltersData = JSON.parse(localStorage.getItem("sub-filters"))
    categoriesData = JSON.parse(localStorage.getItem("collections"))

    
    var str = ""
    function updateUrl(id,section,checkedTrue){
      if(section === 1){
        if(checkedTrue){
          categories = _.without(categories, id)
        }
        else{
          categories.push(id)
        }
      }
      else if(section === 2){
        if(checkedTrue){
          filters = _.without(filters, id)
        }
        else{
          filters.push(id)
        }
      }
      else if(section === 3){
        if(checkedTrue){
          subFilters = _.without(subFilters, id)
        }
        else{
          subFilters.push(id)
        } 
      }
      console.log(categories)
      categories = _.uniq(categories)
      categories.map((i)=>{
        str = str + "&category="+i
      })
      filters = _.uniq(filters)
      filters.map((i)=>{
        str = str + "&filter="+i
      })
      subFilters = _.uniq(subFilters)
      subFilters.map((i)=>{
        str = str + "&sub-filter="+i
      })
      localStorage.setItem("workingSubFilters",JSON.stringify(subFilters))
      localStorage.setItem("workingFilters",JSON.stringify(filters))
      localStorage.setItem("workingCategories",JSON.stringify(categories))
      window.location = window.location.pathname+"?&sub-filter=selected&filter=selected&category=selected"+str
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
              var checkedTrue = categories.includes(item.id)?true:false
              return(
                <Checkbox value={item.name} checkedTrue={checkedTrue} onClick={(e)=>{updateUrl(item.id,1,checkedTrue)}} />
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
              var checkedTrue = filters.includes(item.id)?true:false
              return(
                <Checkbox value={item.name} checkedTrue={checkedTrue}  onClick={()=>{updateUrl(item.id,2,checkedTrue)}}/>
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
            var checkedTrue = subFilters.includes(item.id)?true:false
            return(
              <Checkbox value={item.name} checkedTrue={checkedTrue}  onClick={()=>{updateUrl(item.id,3,checkedTrue)}}/>
            )
          })
        }
      </div>
      </div>
  </div>
  );
}

export default CatalogFilters;
