import React, { useEffect, useState } from 'react';
import './style.css';
// from bootstarp
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
//
import { FiUser, FiLogIn, FiUserPlus, FiSearch, FiChevronDown, FiChevronUp, FiShoppingCart } from "react-icons/fi";
import {FaShoppingCart} from 'react-icons/fa'
import { BsChat, BsExclamationCircle, BsCardChecklist, BsBackspace } from "react-icons/bs";
// Link
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logout_Action } from '../../Actions/Auth_Actions/Logout_Action';


/**
* @author
* @function Header
**/

const Header = (props) => {

    const dispatch = useDispatch();
    const register = useSelector(state => state.register);

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
                            <FormControl type="text" placeholder="Search Products" className="mr-sm-2 inpt-field" />
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
                                        <NavLink to="login" className="more-ele-lbl"><span><BsExclamationCircle /></span>About Us</NavLink>
                                    </div>
                                    <div className="drop-ele">
                                        <NavLink to="login" className="more-ele-lbl"><span><BsChat /></span>Contact Us</NavLink>
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

        </>
    )

}

export default Header