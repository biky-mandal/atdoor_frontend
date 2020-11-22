import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import MenuHeader from '../../Components/MenuHeader';
import Home1Slider from '../../Components/Sliders/Home1Silder';
import Product_Card from '../../Components/ProductCard';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
* @author
* @function Homepage
**/

const Homepage = (props) => {

    // This are Object conating the array
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);

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
                    {
                        products.products.map(product => {
                            if(categories.categories[0]._id === product.category){
                                return <Product_Card
                                _id = {product._id}
                                title={product.name}
                                product_picture={product.productPictures[0].img}
                                amt_original_price = {parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                amt_selling_price = {parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                qty_original_price = {parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
                                qty_selling_price = {parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
                                unit = {product.unit}
                                qtyunit = {product.qtyunit}
                                base_quantity = {product.base_quantity}
                            />
                            }
                        })
                    }
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
                {
                        products.products.map(product => {
                            if(categories.categories[1]._id === product.category){
                                return <Product_Card
                                _id = {product._id}
                                title={product.name}
                                product_picture={product.productPictures[0].img}
                                amt_original_price = {parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                amt_selling_price = {parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                qty_original_price = {parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
                                qty_selling_price = {parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
                                unit = {product.unit}
                                qtyunit = {product.qtyunit}
                                base_quantity = {product.base_quantity}
                            />
                            }
                        })
                    }
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
                {
                        products.products.map(product => {
                            if(categories.categories[2]._id === product.category){
                                return <Product_Card
                                _id = {product._id}
                                title={product.name}
                                product_picture={product.productPictures[0].img}
                                amt_original_price = {parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                amt_selling_price = {parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                qty_original_price = {parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
                                qty_selling_price = {parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
                                unit = {product.unit}
                                qtyunit = {product.qtyunit}
                                base_quantity = {product.base_quantity}
                            />
                            }
                        })
                    }
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
                {
                        products.products.map(product => {
                            if(categories.categories[3]._id === product.category){
                                return <Product_Card
                                _id = {product._id}
                                title={product.name}
                                product_picture={product.productPictures[0].img}
                                amt_original_price = {parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                amt_selling_price = {parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                qty_original_price = {parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
                                qty_selling_price = {parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
                                unit = {product.unit}
                                qtyunit = {product.qtyunit}
                                base_quantity = {product.base_quantity}
                            />
                            }
                        })
                    }
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
                {
                        products.products.map(product => {
                            if(categories.categories[4]._id === product.category){
                                return <Product_Card
                                _id = {product._id}
                                title={product.name}
                                product_picture={product.productPictures[0].img}
                                amt_original_price = {parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                amt_selling_price = {parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                qty_original_price = {parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
                                qty_selling_price = {parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
                                unit = {product.unit}
                                qtyunit = {product.qtyunit}
                                base_quantity = {product.base_quantity}
                            />
                            }
                        })
                    }
                </div>
            </div>
        </Layout>
    )

}

export default Homepage