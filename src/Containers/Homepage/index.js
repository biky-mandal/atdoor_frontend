import React from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import MenuHeader from '../../Components/MenuHeader';
import Home1Slider from '../../Components/Sliders/Home1Silder';
import Product_Card from '../../Components/ProductCard';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Homepage
**/

const Homepage = (props) => {
    return (
        <Layout>
            <MenuHeader />
            <Home1Slider />
            <div className="vege-products">
                <div className="Product-title-div">
                    <label className="Product-title">
                        Fresh Green Vegitables
                    </label>
                    <NavLink to={'vegetables'} className="view-more">View All</NavLink>
                </div>
                <div className="cards">
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                </div>
            </div>

            <div className="vege-products">
                <div className="Product-title-div">
                    <label className="Product-title">
                        Fresh Fruits
                    </label>
                    <NavLink to={'vegetables'} className="view-more">View All</NavLink>
                </div>
                <div className="cards">
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                </div>
            </div>

            <Home1Slider />
            <div className="vege-products">
                <div className="Product-title-div">
                    <label className="Product-title">
                        Dry Fishes
                    </label>
                    <NavLink to={'vegetables'} className="view-more">View All</NavLink>
                </div>
                <div className="cards">
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                </div>
            </div>

            <Home1Slider />
            <div className="vege-products">
                <div className="Product-title-div">
                    <label className="Product-title">
                        Grocery
                    </label>
                    <NavLink to={'vegetables'} className="view-more">View All</NavLink>
                </div>
                <div className="cards">
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                </div>
            </div>

            <div className="vege-products">
                <div className="Product-title-div">
                    <label className="Product-title">
                        Dairy & Sweets
                    </label>
                    <NavLink to={'vegetables'} className="view-more">View All</NavLink>
                </div>
                <div className="cards">
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                    <Product_Card />
                </div>
            </div>
        </Layout>
    )

}

export default Homepage