import React from 'react';
import './style.css';
import Layout from '../../../Components/Layout';
import MenuHeader from '../../../Components/MenuHeader';
import Home1Slider from '../../../Components/Sliders/Home1Silder';
import { useSelector } from 'react-redux';
import Product_Card from '../../../Components/ProductCard';

/**
* @author
* @function Dairy_Page
**/

const Dairy_Page = (props) => {
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);

    return (
        <Layout>
            <MenuHeader/>
            <Home1Slider/>
            <div className="vege-page-main-div">
                <div className="vege-heading-div">
                    <label>Dairy & Sweets</label>
                </div>
                <div className='vege-body-div'>
                {
                        products.products.map(product => {
                            if(categories.categories[4]._id === product.category){
                                return <Product_Card
                                    key = {product._id}
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

export default Dairy_Page