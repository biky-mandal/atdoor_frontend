import React from 'react';
import './style.css';
import Header from '../Header';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            <Header />
            {
                props.children
            }
        </>
    )

}

export default Layout