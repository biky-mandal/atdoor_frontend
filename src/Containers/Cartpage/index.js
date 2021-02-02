import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import Products_in_Cart from '../../Components/Product_in_Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_cart_action } from '../../Actions/fetchCart_action';
// import { register_action } from '../../Actions';
import { BiRupee } from 'react-icons/bi';
import Loading from '../../Components/Loader';

/**
* @author
* @function CartPage
**/

const CartPage = (props) => {

    const dispatch = useDispatch();
    const register = useSelector(state => state.register)
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)

    // When Cart items are not fetched it will show the loading.
    if(!cart.cart.cartItems){
        return <Loading label="Loading."/>
    }

    return (
        <Layout>
            <div className="box-div">
                <div className="cart-page-title-div">
                    <label>My Cart</label>
                </div>
                <div className="box1-div">
                    {
                        // Here in the code snippet we apply to condition 
                        products.products ?
                            products.products.map(product => {
                                if(cart.cart.cartItems){
                                    return cart.cart.cartItems.map(items => {
                                        if (product._id === items.product) {
                                            return <Products_in_Cart
                                                key={product._id}
                                                _id={product._id}
                                                title={product.name}
                                                product_picture={product.productPictures[0].img}
                                                amt_original_price={parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                                amt_selling_price={parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                                key={product._id}
                                                _id={product._id}
                                                title={product.name}
                                                product_picture={product.productPictures[0].img}
                                                amt_original_price={parseFloat(product.amt_original_price) * parseFloat(product.base_quantity)}
                                                amt_selling_price={parseFloat(product.amt_selling_price) * parseFloat(product.base_quantity)}
                                                qty_original_price={parseFloat(product.qty_original_price) * parseFloat(product.base_quantity)}
                                                qty_selling_price={parseFloat(product.qty_selling_price) * parseFloat(product.base_quantity)}
                                                unit={product.unit}
                                                qtyunit={product.qtyunit}
                                                base_quantity={product.base_quantity}
                                                description={product.description}
                                                quantity={items.quantity}
                                                price={items.price}
                                            />
                                        }
                                    })  
                                }
                            })
                            :
                            null
                    }
                </div>

                <div className="box2-div">
                    <div className="box2-div-heading">
                        <label>price Details</label>
                    </div>
                    <div>
                        <div className="sub-price-div">
                            <label className="sub-price-div-lbl1">Price({cart.cart.cartItems ? cart.cart.cartItems.length : null} items)</label>
                            <label className="sub-price-div-lbl2"><BiRupee />{
                                cart.cart.cartItems ? Math.floor(cart.cart.cartItems.reduce((tot, items) => {

                                    return tot + items.price
                                }, 0))
                                    :
                                    null
                            }
                            </label>
                        </div>

                        <div className="sub-price-div">
                            <label className="sub-price-div-lbl1">Delivery Charge: <span><BiRupee />20</span></label>
                        </div>

                        <div className="sub-price-div-total">
                            <label className="sub-price-div-lbl1 total">Total Price: <span><BiRupee />{
                                cart.cart.cartItems ? Math.floor(cart.cart.cartItems.reduce((tot, items) => {

                                    return tot + items.price
                                }, 20))
                                    :
                                    null
                            }</span></label>
                        </div>
                    </div>
                    <div className="order-now-div">
                        Order Now
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage