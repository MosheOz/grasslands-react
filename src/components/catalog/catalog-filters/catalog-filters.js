import React from "react";
import "./catalog-filters.css";
import Checkbox from "../../common/checkbox/checkbox";
import { useQuery } from "@apollo/client";
import { GET_FILTERS_PARAMS_NEW_NEW } from "../../../queries/queries";
import { update } from "lodash";
const _ = require('lodash');

function CatalogFilters(props) {

    var { filters,workingFilters } = props

    
    function updateUrl(id,section,checkedTrue){
      workingFilters = JSON.parse(localStorage.getItem("workingFilters"),true)
      var str = ""
      if(section === 1){
        if(checkedTrue){
          workingFilters = _.without(workingFilters, id)
        }
        else{
          workingFilters.push(id)
        }
      }
      workingFilters = _.uniq(workingFilters)
      workingFilters.map((i)=>{
        str = str + "&f="+i
      })
      console.log(str)
      localStorage.setItem("workingFilters",JSON.stringify(workingFilters))
      window.location = window.location.pathname+"?&f=s"+str
    }
    

  return (
    <div className="catalog-filters">
     <div className="h4-medium catalog-filters__title">Filters</div>
      {
        filters && filters.map((filter)=>{
          console.log(filter)
          return(
            <div className="catalog-filters__spotlight">
              <div className="h6-medium">{ filter.name }</div>
              <div className="catalog-filters__spotlight__checkboxes">
              {
                filter.subFilter && filter.subFilter.map((subFil)=>{
                  var checkedTrue = workingFilters.includes(subFil.id)?true:false
                  return(
                    <Checkbox value={subFil.name} checkedTrue={checkedTrue} onClick={(e)=>{updateUrl(subFil.id,1,checkedTrue)}}/>
                  )
                })
              }
              </div>
            </div>
          )
        })
      }

  </div>
  );
}

export default CatalogFilters;
