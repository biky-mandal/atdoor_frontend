import React from 'react';
import { useSelector } from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { BiRupee } from 'react-icons/bi';

/**
* @author
* @function Products_in_Cart
**/

const Products_in_Cart = (props) => {

    const products = useSelector(state => state.products)

    const all_Product = products.products;
    // _id = {product._id}
    // title={product.name}
    // product_picture={product.productPictures[0].img}
    // amt_original_price = {parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
    // amt_selling_price = {parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
    // qty_original_price = {parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
    // qty_selling_price = {parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
    // unit = {product.unit}
    // qtyunit = {product.qtyunit}
    // base_quantity = {product.base_quantity}

    return (
        <div className="products_in_cart_div">
            <div className="l-div_cart">
                <img className="product-image-cart" src={generatePublicUrl(props.product_picture)} alt={props.title} />
            </div>
            <div className="r-div_cart">
                <div className="cart-product-title-div">
                    <label>{props.title} - <span>{props.base_quantity}{props.unit === '' ? props.qtyunit : props.unit}</span></label>
                </div>
                <div className="below-section-cart-div">
                    <div className="below-section-price-div">
                        <div className="price-heading-div">Price(INR):</div>
                        <div className="product-price-cart-div">
                            {
                                props.amt_selling_price ?
                                    <label className="product-price-2">{props.amt_selling_price}</label>
                                    :
                                    <label className="product-price-2">{props.qty_selling_price}</label>
                            }
                        </div>
                    </div>
                    <div className="below-section-amount-div">
                        <div className="price-heading-div">Total Price(INR):</div>
                        <div className="product-price-cart-div">
                            <label className="product-price-2">{props.price}</label>
                        </div>
                    </div>
                    <div className="below-section-quantity-div">
                        <div className="price-heading-div">Quantity:</div>
                        <div className="product-price-cart-div">
                            <label className="product-price-2">{props.quantity} {props.unit === '' ? props.qtyunit : props.unit}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products_in_Cart