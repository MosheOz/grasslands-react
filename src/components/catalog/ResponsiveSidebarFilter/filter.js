import React, { useState } from 'react';
import "./filter.css";
import filterImg from '../ResponsiveSidebarFilter/filter.png';
import closeImg from '../ResponsiveSidebarFilter/close.png'

const Filter = (props) => {

    const [showFilter, setShowFilter] = useState(false);


    const toggleFilter = () => {
        setShowFilter(!showFilter);
    }


    return (
        <React.Fragment>
            <div className="main_filter">
                <div className={showFilter ? 'sidebar show' : 'sidebar hide'} >
                <img onClick={toggleFilter} className="close_icon" src={closeImg} width="20px"/>
                    {props.children}

                </div>
                <div id="nav-icon" onClick={toggleFilter} className="filter">
                    <img src={filterImg} />
                    <span>Filter</span>
                </div>
              
            </div>


        </React.Fragment>
    )
}
export default Filter
