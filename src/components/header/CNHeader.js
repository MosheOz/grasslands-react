import React, { useContext,useState } from "react";
import BasketIcon from '../common/svg/basket/basket'
import PersonIcon from '../common/svg/person-icon/person-icon';
import DeliveryTruckIcon from '../common/svg/delivery-truck-icon/delivery-truck-icon';
import "./CNHeader.css";
import SearchIcon from './loupe.png';
import MenuIcon from './menu.png';
import Filter2Icon from './filter.png';
import FilterIcon from '../catalog/ResponsiveSidebarFilter/filter.png'
import CloseIcon from '../catalog/ResponsiveSidebarFilter/close.png'

import { GET_COLLECTIONS } from "../../queries/queries";
import { useQuery } from "@apollo/client";
import { FilterContext } from "../../context";

import CNSidebar from "./CNSidebar";


const CNHeader = () => {
	const { searchState, setSearchState } = useContext(FilterContext);
	const [showFilter, setShowFilter] = useState(false);
	const updateFilters = (e) => {
		setSearchState({
			...searchState,
			facetValueIds: [],
			collectionId: e.target.value !== "Categories" ? e.target.value : null,
			facetFaluesPerCollectionInit: true,
		});
	};
	const onSearchBox = (e) => {
		setSearchState({
			isInit: true,
			facetFaluesPerCollectionInit: true,
			facetValuesDefaultFilters: [],
			facetFaluesDefaultPerCollection: [],
			facetValueIdsPerCollection: [],
			facetValueIds: [],
			collectionId: null,
			term: e.target.value,
		});
	};
	const { loading, error, data } = useQuery(GET_COLLECTIONS);
	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	const toggleFilter = () => {
		setShowFilter(!showFilter);
}
	return (
		<React.Fragment>
			{/* DESK */}
			<div className="container CN-desktop-menu">
				<header className="p-3 headers mb-3">
					<div className="row cn-center">
						<div className="col-2 ">
							<span className="header__logo">Grasslands</span>
						</div>
						<div className="col-5">
							<div className="row">
								<div className="col-8">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">
									<img src={SearchIcon} className="Cn-search-icon" />
									</span>
								</div>
								</div>
								<div className="col-4">
									<select className="form-control CN-category-list" onChange={updateFilters}>
										<option >Categories</option>
										{data.collections.items.map((col) => (
											<option value={col.id} key={col.id}>
												{col.name}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div className="col-5 ">
							<div className="row">
								<div className="col-5	Cn-header-language" style={{textAlign:"right"}}>
									<span className="header__language ">עברית</span>
								</div>
								<div className="col-5 	Cn-icon-sector text-center">
									<DeliveryTruckIcon /> <span className="Cn-h6-regular">  Delivery Address</span>
								</div>
								<div className="Cn-person-icon col-1">
									<i className="header__person-icon">
										<PersonIcon />
									</i>
								</div>
								<div className="Cn-person-icon  col-1">
									<i className="header__basket-icon">
										<BasketIcon />
									</i>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>




			{/* MOBILE */}
			<header className="CN-mobile-header">
				<div className="row">
					<div className="col-5 col-sm-5 p-0">
						<img onClick={toggleFilter} src={MenuIcon} className="CN-menu-icon" />
						<span className="header__logo">Grasslands</span>
					</div>
					<div className="col-7 col-sm-7 text text-end p-0 d-flex justify-content-around">
						{/* <span className="header__language mx-3">עברית</span> */}
						<i className="header__truck-icon">
								<div className="CN-address-title">Deliver to Andri</div>
								<div className="CN-address-title">244 5th Ave #2, Ne...</div>
							{/* <DeliveryTruckIcon /> */}
						</i>
						<i className="header__basket-icon">
							<BasketIcon />
						</i>
					</div>

					<div className="clear"></div>

				</div>
			</header>

			{/* SEARCH */}
			<div className="row Cn-filter">

				<div  className={showFilter ? 'show Cn-sidebar col-6' : 'col-6  hide'}>
					<CNSidebar toggleFilter={toggleFilter} />
					{/* <img src={CloseIcon} className="Cn-Close-icons"  onClick={toggleFilter}/> */}
				</div>

				<div class="input-group col-12">
					<div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon1">
						<img src={SearchIcon} className="Cn-search-icon" />
						</span>
					</div>
					<input type="text" class="form-control" placeholder="Search for product or farmer" className="Cn-header__searchs" onChange={onSearchBox} />
				</div>
				

			</div>


			{/* FILTERS */}

			<div className="row">
				<div class="col-12 text-center mt-30 CN-sidebar-display">
					<span className="CN-filter-tags CN-filter-tags-active">
						<img className="CN-filter-icon" src={Filter2Icon} />
						<span>Filters</span>
					</span>
					<span className="CN-filter-tags">Sale</span>
					<span className="CN-filter-tags">Local</span>
				</div>
			</div>
			
			
			<div className="row">
				<div class="col-12">
					<div className="CN-border"></div>
				</div>
			</div>

		</React.Fragment>
	)


}

export default CNHeader