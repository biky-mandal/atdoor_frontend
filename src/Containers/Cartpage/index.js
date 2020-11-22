import React, { useEffect } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import Products_in_Cart from '../../Components/Product_in_Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_cart_action } from '../../Actions/fetchCart_action';
import { register_action } from '../../Actions';

/**
* @author
* @function CartPage
**/

const CartPage = (props) => {

    const dispatch = useDispatch();
    const register = useSelector(state => state.register)
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        if(register.authenticate){
            const currentUserId = register.customer._id
            dispatch(fetch_cart_action(currentUserId));  
        }
    }, [])

    console.log(products.products)
    console.log(cart.cart.cartItems)

    return (
        <Layout>
            <div className="box-div">
                <div className="box1-div">
                    {
                        // Here in the code snippet we apply to condition 
                        products.products ?
                        products.products.map(product => {
                            return cart.cart.cartItems.map(items => {
                                if(product._id === items.product){
                                    return <Products_in_Cart
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
                                        description = {product.description}
                                        //
                                        quantity = {items.quantity}
                                        price = {items.price}
                                    />
                                }
                            })
                        })
                        :
                        null
                    }
                </div>
                <div className="box2-div">

                </div>
            </div>
        </Layout>
    )
}

export default CartPage