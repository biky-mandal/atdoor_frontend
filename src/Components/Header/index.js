import React, { useState } from 'react';
import './style.css';
// from bootstarp
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
//
import { FiUser, FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {FaShoppingCart} from 'react-icons/fa'
import { BsChat, BsExclamationCircle, BsCardChecklist, BsBackspace } from "react-icons/bs";
// Link
import { NavLink, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logout_Action } from '../../Actions/Auth_Actions/Logout_Action';


/**
* @author
* @function Header
**/ 

const Header = (props) => {

    const [searchDisplay, setSearchDisplay] = useState(false);
    const [filter_Product, setFilterProduct] = useState([]);

    const dispatch = useDispatch();
    const register = useSelector(state => state.register);
    const products = useSelector(state => state.products);
    const searched_product = useSelector(state => state.filterProducts);


    const [showMore, setShowMore] = useState(false);
    // Toggle function to toggle the more options

    const logout = () => {
        dispatch(Logout_Action());
    }

    const expandMore = () => {
        if (showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    }

    // This Function will run to close the drop div when clicked outside of it..
    if (showMore) {
        document.onclick = function (e) {
            // It will hide only when we doesnot click the following 2 divs.
            if (e.target.id !== 'drop_div' && e.target.id !== 'more_btn') {
                setShowMore(false);
            }
        };
    }


    const renderNonLoggedInLinks = () => {
        return (
            <div className="drop-div">
                <NavLink to="login" className="login-lbl">Login</NavLink>
            </div>
        );
    }
    const renderLoggedInLinks = () => {
        return (
            <div className="drop-ele">
                <span onClick={logout} className="more-ele-lbl"><span><BsBackspace /></span>LogOut</span>
            </div>
        );
    }

    const display_text = (e) => {
        // Prevents default loading while Submitting a form.
        e.preventDefault();
        // Store the string that User searched into a const.
        const searchString = document.getElementById('search_id').value.toUpperCase();
        // console.log(products.products);
        
        // Displaying the product which matched.
        let filterProduct = [];
        products.products.map(product => {
            if(product.name.toUpperCase().indexOf(searchString) > -1 ){
                return filterProduct.push(product);
            }
        })
        setFilterProduct(filterProduct);
        // dispatch(search_action(filterProduct));

        setSearchDisplay(true);

        // This function Checks that the searh bar is Empty or not 
        //  If it is empty it Will Show Nothing.
        if(document.getElementById('search_id').value === ''){
            setSearchDisplay(false);
        }
    }


    return (
        <>
            <Navbar className="navbar-bg" sticky="top" collapseOnSelect bg="light" variant="dark">
                <NavLink to="/" className="navbar-brand">atDoor</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav>
                            <li className="nav-item">
                                <span className="nav-link" >Logout</span>
                            </li>
                        </Nav> */}
                        <Form inline className="search-form">
                            <FormControl onKeyUp={display_text} id="search_id" type="text" placeholder="Search Products" className="mr-sm-2 inpt-field" />
                            <button className="search-btn"><FiSearch /></button>
                        </Form>
                    </Nav>
                    <Nav className="ml-auto">
                        {register.authenticate ? null : renderNonLoggedInLinks()}
                        <div className="more-div">
                            <label id="more_btn" className="more-lbl" onClick={expandMore}>More{showMore ? <span>{showMore}<FiChevronUp /></span> : <span>{showMore}<FiChevronDown /></span>}</label>
                        </div>
                        {register.authenticate ? <div className="drop-div">
                            <NavLink to="cart" className="login-lbl"><FaShoppingCart/> cart</NavLink>
                        </div>
                        : null
                        }
                        {
                            showMore ?
                                <div id="drop_div" className="drop-down-div">
                                    <div className="drop-ele">
                                        <NavLink to="profile" className="more-ele-lbl"><span><FiUser /></span>My Profile</NavLink>
                                    </div>
                                    <div className="drop-ele">
                                        <NavLink to="order" className="more-ele-lbl"><span><BsCardChecklist /></span>Orders</NavLink>
                                    </div>
                                    <div className="drop-ele">
                                        <NavLink to="about" className="more-ele-lbl"><span><BsExclamationCircle /></span>About Us</NavLink>
                                    </div>
                                    <div className="drop-ele">
                                        <NavLink to="contact" className="more-ele-lbl"><span><BsChat /></span>Contact Us</NavLink>
                                    </div>
                                    {
                                        register.authenticate ? renderLoggedInLinks() : null
                                    }
                                </div>
                                :
                                null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {
                searchDisplay ? 
                    filter_Product.length > 0 ? 
                        <div className="display_div">
                            {
                                filter_Product.map(prod => {
                                    return <div key={prod._id} className="display_text">
                                        <NavLink to={
                                            {
                                                pathname:'/product',
                                                aboutProps:[
                                                    prod._id
                                                ]
                                            }
                                        } className="more-ele-lbl">{prod.name}</NavLink>
                                    </div>
                                })
                            }
                        </div>
                    :
                        null
                :
                null
            }
        </>
    )

}

export default Header