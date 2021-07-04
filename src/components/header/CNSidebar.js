
import React from 'react';

import CloseIcon from './close.png'

const CNSidebar = (props) => {
    
    return(
        <React.Fragment>

            <div className="row CN-menu-list">
                
                <div className="col-2">
                    <img src={CloseIcon} className="Cn-Close-icons" onClick={() => props.toggleFilter()} />
                </div>
                <div className="col-10"><span className="header__logo">Grasslands</span></div>
                
            </div>


            <div className="row CN-menu-list">
                <div className="col-2">
                    <img src={require('./categories.svg').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Categories</span></div>
            </div>

            <div className="row CN-menu-list">
                <div className="col-2">
                    <img src={require('./basket.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Basket</span></div>
            </div>

            <div className="row CN-menu-list mb-50">
                <div className="col-2">
                    <img src={require('./help.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Help</span></div>
            </div>

            <div className="row CN-menu-list">
                <div className="col-2">
                    <img src={require('./basket_add.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Orders</span></div>
            </div>

            <div className="row CN-menu-list">
                <div className="col-2">
                    <img src={require('./delivery_truck.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Recuring Delivery</span></div>
            </div>

            <div className="row CN-menu-list">
                <div className="col-2">
                    <img src={require('./pin-heart.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Addresses</span></div>
            </div>

            <div className="row CN-menu-list">
                <div className="col-2">
                    <img src={require('./credit-card.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Bank Cards</span></div>
            </div>

            <div className="row CN-menu-list mb-50">
                <div className="col-2">
                    <img src={require('./settings.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Settings</span></div>
            </div>

            <div className="row CN-menu-list mb-50">
                <div className="col-2">
                    <img src={require('./globe.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>עברית</span></div>
            </div>


            <div className="row CN-menu-list mb-50">
                <div className="col-2">
                    <img src={require('./exit.png').default} className="CN-sidebar-menu-icon" />
                </div>
                <div className="col-10"><span className={'CN-sidebar-menu-text'}>Sign Out</span></div>
            </div>


        </React.Fragment>
    )

}

export default CNSidebar
