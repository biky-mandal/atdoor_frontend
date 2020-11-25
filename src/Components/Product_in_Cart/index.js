import React,{useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { BiRupee } from 'react-icons/bi';
import {AiFillPlusCircle, AiFillMinusCircle, AiFillDelete} from 'react-icons/ai';
import { Delete_cart_action } from '../../Actions/DeleteCartElement';
import { addToCart_Action } from '../../Actions';

/**
* @author
* @function Products_in_Cart
**/

const Products_in_Cart = (props) => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [user_input_quantity, setUser_input_quantity] = useState(
        props.base_quantity
    );
    const [user_input_amount, setUser_input_amount] = useState(

        props.amt_selling_price ?
            props.amt_selling_price
            :
            props.qty_selling_price
    );

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

    const product_minus_btn_clicked = () => {
        const product = props._id
        const quantity = (-parseFloat(user_input_quantity))
        const price = (-parseFloat(user_input_amount))

        const cartItems = {
            product,
            quantity,
            price
        } 

        console.log(cartItems);
        dispatch(addToCart_Action(cartItems))
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
                        <div onClick={product_delete_btn_clicked} className="delete-product-icon"><AiFillDelete/></div>
                        <div onClick={product_minus_btn_clicked}  className="minus-in-cart"><AiFillMinusCircle/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products_in_Cart