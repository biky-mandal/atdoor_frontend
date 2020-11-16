import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

/**
* @author
* @function MenuHeader
**/

const MenuHeader = (props) => {
    return (
        <div className="menu-header">
            <NavLink to={'vegetables'} className="category_div_tabs">
                <div className="cat-img-div1"></div>
                <label>Vegetables </label>
            </NavLink>
            <NavLink to={'fruits'} className="category_div_tabs">
                <div className="cat-img-div2"></div>
                <label>Fruits</label>
            </NavLink>
            <NavLink to={'dryfishes'} className="category_div_tabs">
                <div className="cat-img-div3"></div>
                <label>Dry Fish</label>
            </NavLink>
            <NavLink to={'groceries'} className="category_div_tabs">
                <div className="cat-img-div4"></div>
                <label>Grocery</label>
            </NavLink>
            <NavLink to={'dairy'} className="category_div_tabs">
                <div className="cat-img-div5"></div>
                <label>Dairy</label>
            </NavLink>
        </div>
    )

}

export default MenuHeader