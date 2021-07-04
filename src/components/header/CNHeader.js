import React, { useContext,useState } from "react";
import BasketIcon from '../common/svg/basket/basket'
import PersonIcon from '../common/svg/person-icon/person-icon';
import DeliveryTruckIcon from '../common/svg/delivery-truck-icon/delivery-truck-icon';
import "./CNHeader.css";
import SearchIcon from './loupe.png';
import FilterIcon from '../catalog/ResponsiveSidebarFilter/filter.png'
import CloseIcon from '../catalog/ResponsiveSidebarFilter/close.png'

import { GET_COLLECTIONS } from "../../queries/queries";
import { useQuery } from "@apollo/client";
import { FilterContext } from "../../context";
import CatalogFilters from "../catalog/catalog-filters/catalog-filters";


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
									<input className="Cn-header__searchs" onChange={onSearchBox} />
								</div>
								<div className="col-4">
									<select className="form-control" onChange={updateFilters}>
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
					<div className="col-5 col-sm-8 p-0">
						<span className="header__logo">Grasslands</span>
					</div>
					<div className="col-7 col-sm-4 justify-content-evenly d-flex  p-0">
						<span className="header__language mx-3">עברית</span>
						<i className="header__truck-icon">
							<DeliveryTruckIcon />
						</i>
						<i className="header__person-icon">
							<PersonIcon />
						</i>
						<i className="header__basket-icon">
							<BasketIcon />
						</i>
					</div>
				</div>
			</header>
			<div className="row Cn-filter">
				<div  className={showFilter ? 'show Cn-sidebar-filter col-6' : 'col-6  hide'}>
					<CatalogFilters />
					<img src={CloseIcon} className="Cn-Close-icons"  onClick={toggleFilter}/>
				</div>
				<div className="clear"></div>
				<div className="col-9 col-md-7 offset-md-3 col-sm-10">
					<select className="form-control Cn-cat-input" onChange={updateFilters}>
						<option >Categories</option>
						{data.collections.items.map((col) => (
							<option value={col.id} key={col.id}>
								{col.name}
							</option>
						))}
					</select>
				</div>
				<div className='col-3  col-md-2 col-sm-2 p-0 d-flex align-items-center justify-content-around'>

					<img src={SearchIcon} className="Cn-search-icon" />
					<img src={FilterIcon} onClick={toggleFilter} className="Cn-search-icon" />
				
				</div>


			</div>

		</React.Fragment>
	)


}

export default CNHeader