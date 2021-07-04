import React from 'react';
import "./CNFooter.css"

const CNFooter = () => {
    return (

        <div className=" Cn-footer-background">
            <div className="container">
                <div className="row">
                    <div className=" col-sm-12 text-center col-12 Cn-footer-logo pt-2 col-md-4">
                        <span className="Cn-footer-logo " style={{ fontSize: "23px" }}>Grasslands</span>
                    </div>
                    <div className="col-md-2 col-sm-6 Cn-footer col-6 center ">
                        <h6>Shoping</h6>
                        <p className="Cn-item-list ">Top Details</p>
                        <p className="Cn-item-list">Browse Products</p>
                        <p className="Cn-item-list">Delivery and Pickup</p>
                    </div>
                    <div className="col-6  col-md-2  Cn-footer col-sm-6 ">
                        <h6>About</h6> 
                        <p className="Cn-item-list ">About  Grasslands</p>
                        <p className="Cn-item-list">Quality Standards</p>
                        <p className="Cn-item-list">Potential Suppliers</p>
                    </div>
                    <div className="col-6 col-md-2   Cn-footer col-sm-6 ">
                        <h6>More</h6>
                        <p className="Cn-item-list">Foods</p>
                        <p className="Cn-item-list">Special Diets</p>
                        <p className="Cn-item-list">Tips and Ideas</p>
                        <p className="Cn-item-list">Recipes</p>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 Cn-footer ">
                    <h6>Need Help?</h6>
                    <span>Visit Customer care</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CNFooter
