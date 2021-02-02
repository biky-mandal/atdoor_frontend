import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { BiRupee } from 'react-icons/bi';
import {AiFillPlusCircle, AiFillMinusCircle, AiFillDelete} from 'react-icons/ai';
import { Delete_cart_action } from '../../Actions/DeleteCartElement';
import { addToCart_Action, fetch_cart_action } from '../../Actions';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

/**
* @author
* @function Products_in_Cart
**/

const Products_in_Cart = (props) => {

    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    const register = useSelector(state => state.register);
    const dispatch = useDispatch();

    const user_input_quantity = props.base_quantity;
    const user_input_amount = props.amt_selling_price ? props.amt_selling_price : props.qty_selling_price;

    useEffect(() => {
        console.log("Updated!")
    },[])

    if(cart.added){
        const currentUserId = register.customer._id
        dispatch(fetch_cart_action(currentUserId));
    }

    const product_delete_btn_clicked = () => {

        const product = props._id
        const quantity = props.quantity
        const price = props.price

        const cartItems = {
            product,
            quantity,
            price
        } 

        console.log(cartItems);
        dispatch(Delete_cart_action(cartItems));
    }

    const product_plus_btn_clicked = () => {

        // setLoad(true);
        const product = props._id
        const quantity = parseFloat(user_input_quantity)
        const price = parseFloat(user_input_amount)

        const cartItems = {
            product,
            quantity,
            price
        } 
        // Checking for item is available or not.
        cart.cart.cartItems.map(item => {
            // go through all the elements of cartItems
            if(item.product === product){ // select where item product id === product id
                products.products.map(prod => {
                    if(prod._id === product){ // This condition prevent backend more backend call
                        if(parseFloat(prod.stock_amount) > item.quantity){ // Check whether item amount exist or not.
                            dispatch(addToCart_Action(cartItems))
                        }
                    }
                })
            }
        })
        
    }

    const product_minus_btn_clicked = () => {

        if(parseFloat(props.quantity) > parseFloat(props.base_quantity) ){
            const product = props._id
            const quantity = (-parseFloat(user_input_quantity))
            const price = (-parseFloat(user_input_amount))
    
            const cartItems = {
                product,
                quantity,
                price
            } 
            dispatch(addToCart_Action(cartItems))
        }else{
            product_delete_btn_clicked();
        }
    }

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
                        <div className="price-heading-div">Price:</div>
                        <div className="product-price-cart-div">
                            {
                                props.amt_selling_price ?
                                    <label className="product-price-2"><BiRupee/>{props.amt_selling_price}</label>
                                    :
                                    <label className="product-price-2"><BiRupee/>{props.qty_selling_price}</label>
                            }
                        </div>
                    </div>
                    <div className="below-section-amount-div">
                        <div className="price-heading-div">Total Price:</div>
                        <div className="product-price-cart-div">
                            <label className="product-price-2"><BiRupee/>{props.price}</label>
                        </div>
                    </div>
                    <div className="below-section-quantity-div">
                        <div className="price-heading-div">Quantity:</div>
                        <div className="product-price-cart-div">
                            <label className="product-price-2">{props.quantity} {props.unit === '' ? props.qtyunit : props.unit}</label>
                        </div>
                    </div>
                    <div className="below-section-delete-product-icon-div">
                        <div onClick={product_plus_btn_clicked} className="plus-in-cart"><AiFillPlusCircle/></div>
                        {
                            cart.fetching ? 
                                <Loader type="TailSpin" color="#dc3545" className="delete-product-icon" height={18} width={18} />
                                :
                                <div onClick={product_delete_btn_clicked} className="delete-product-icon"><AiFillDelete/></div>
                                
                        }
                        <div onClick={product_minus_btn_clicked}  className="minus-in-cart"><AiFillMinusCircle/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products_in_Cart