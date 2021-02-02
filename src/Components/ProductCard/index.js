import React, { useState } from 'react';
import './style.css';
import { BiRupee } from 'react-icons/bi';
import { generatePublicUrl } from '../../urlConfig';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { addToCart_Action } from '../../Actions';
/**
* @author
* @function Product_Card
**/

const Product_Card = (props) => {

    const dispatch = useDispatch()

    const [changebutton, setChangebutton] = useState(false);
    const [user_input_quantity, setUser_input_quantity] = useState(
        props.base_quantity
    );
    const [user_input_amount, setUser_input_amount] = useState(

        props.amt_selling_price ?
            props.amt_selling_price
            :
            props.qty_selling_price
    );
    // When The minus button is clicked
    const minus_btn_clicked = () => {
        setChangebutton(false);

        if(
            // Condition for minus button
            parseFloat(user_input_quantity) > parseFloat(props.base_quantity)
        ){
            setUser_input_amount(
                user_input_amount - (
                    props.amt_selling_price ?
                        props.amt_selling_price
                        :
                        props.qty_selling_price
                )
            )
    
            setUser_input_quantity(
                parseFloat(user_input_quantity) - parseFloat(props.base_quantity)
            )
        }else{

        }
    }

    // When the plus button is clicked
    const plus_btn_clicked = () => {
        setChangebutton(false);

        setUser_input_amount(
            user_input_amount + (
                props.amt_selling_price ?
                    props.amt_selling_price
                    :
                    props.qty_selling_price
            )
        )

        setUser_input_quantity(
            parseFloat(user_input_quantity) + parseFloat(props.base_quantity)
        )
    }

    const add_to_cart_clicked = () => {
        setChangebutton(true)

        const product = props._id
        const quantity = parseFloat(user_input_quantity)
        const price = parseFloat(user_input_amount)

        const cartItems = {
            product,
            quantity,
            price
        } 

        console.log(cartItems);
        dispatch(addToCart_Action(cartItems))
    }
    return (
        <div className="product-card">
            <div className="product-card-image-div">
                <img className="product-image" src={generatePublicUrl(`${props.product_picture}`)} alt={props.title} />
            </div>
            <div className="product-card-details-div">
                <div className="product-title-div">
                    <label className="product-title">{props.title}</label>
                </div>
                <div className="product-price-div">
                    {
                        props.amt_original_price ?
                            <label className="product-price-lbl1"><BiRupee /><s>{props.amt_original_price}</s></label>
                            :
                            <label className="product-price-lbl1"><BiRupee /><s>{props.qty_original_price}</s></label>

                    }
                    {
                        props.amt_selling_price ?
                            <label className="product-price-lbl2"><BiRupee />{props.amt_selling_price}</label>
                            :
                            <label className="product-price-lbl2"><BiRupee />{props.qty_selling_price}</label>

                    }
                    {
                        props.amt_selling_price ?
                            <label className="product-price-lbl3"><BiRupee size={16} />{(parseFloat(props.amt_original_price, 10) - parseFloat(props.amt_selling_price, 10)).toFixed(2)} off</label>
                            :
                            <label className="product-price-lbl3"><BiRupee size={16} />{(parseFloat(props.qty_original_price, 10) - parseFloat(props.qty_selling_price, 10)).toFixed(2)} off</label>

                    }

                </div>
                <div className="product-footer-div">
                    <div className="quantity-div">
                        <label className="footer-lbl1">Total Quantity</label>
                        <label className="footer-lbl2">{user_input_quantity}<span>{props.unit === '' ? props.qtyunit : props.unit}</span></label>
                    </div>
                    <div className="amount-div">
                        <label className="footer-lbl1">Total Price</label>
                        <label className="footer-lbl2"><BiRupee size={16} />{user_input_amount}</label>
                    </div>
                    <div className="footer-final-div">
                        <button onClick={minus_btn_clicked} className="minus-div">
                            -
                        </button>
                        {
                            changebutton ?
                                <NavLink to='cart' className="add-to-cart-div">
                                    Open Cart
                                </NavLink>
                                :
                                <button onClick={add_to_cart_clicked} className="add-to-cart-div">
                                    Add To Cart
                                </button>
                        }
                        <button onClick={plus_btn_clicked} className="plus-div">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Product_Card