import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import Products_in_Cart from '../../Components/Product_in_Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_cart_action } from '../../Actions/fetchCart_action';
// import { register_action } from '../../Actions';
import { BiRupee } from 'react-icons/bi';
import Loading from '../../Components/Loader';
import { paymentaction } from '../../Actions/paymentAction';
import {API_URL} from '../../urlConfig';
import { NavLink } from 'react-router-dom';
import { codOrderAction } from '../../Actions/codplaceorder';


/**
* @author
* @function CartPage
**/

const CartPage = (props) => {

    const dispatch = useDispatch();
    const register = useSelector(state => state.register)
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    const orderDetails = useSelector(state => state.orderDetails)

    const [orderpage, showOrderpage] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUseremail] = useState('');

    useEffect(() => {
        const currentUserId = register.customer._id
        dispatch(fetch_cart_action(currentUserId));
    },[])

    // When Cart items are not fetched it will show the loading.
    if (!cart.cart.cartItems) {
        // return <Loading label="Loading." />
        return(
            <Layout>
                <div className="warning-div">
                    <span>Refresh!</span>
                    <label>You have Nothing in Your Cart.</label>
                    <NavLink to={'/'}>Go Back & Buy Something</NavLink>
                </div>
            </Layout>
        );
    }

    if(orderDetails.fetched){
        return(
            <Layout>
                <div className="place-div">
                    <span>Order Placed!</span>
                    <label>We will reach you soon.</label>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
            </Layout>
        );
    }

    // This function will run when somone order on COD
    const codOrder = () => {

        const deliveryCharge = 20
        // TOtal Price
        const amount = cart.cart.cartItems ? Math.floor(cart.cart.cartItems.reduce((tot, items) => {
            return tot + items.price
        }, 0)) + deliveryCharge
            :
            null
        const orderItems = cart.cart.cartItems;

        dispatch(codOrderAction(amount, orderItems))
    }

    const fetchOrder = () => {
        showOrderpage(true)
    }

    const loadRazorpay = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const _KEY_ = document.domain === "localhost"

    async function displayRazorpay(){

        const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Payment Div Failed to load. Are You Online?")
            return
        }

        const deliveryCharge = 20
        // TOtal Price
        const amount = cart.cart.cartItems ? Math.floor(cart.cart.cartItems.reduce((tot, items) => {
            return tot + items.price
        }, 0)) + deliveryCharge
            :
            null
        const orderItems = cart.cart.cartItems;

        const sendingData = {
            id:register.customer._id,
            amount: amount,
            orderItems: orderItems,
        }

        const data = await fetch(`${API_URL}/order`, {
            method: "POST", 
            body: JSON.stringify(sendingData),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'authorization': `bearer ${register.token}`
            },
        })
        .then(
            (t)=>t.json()
        )

        let options = {
            "key": _KEY_ ? "rzp_test_6fro0z3TI6UZ9U" : "_DEV_KEY_", // Enter the Key ID generated from the Dashboard
            "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": data.currency,
            "name": userName,
            "description": "Test Transaction",
            "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                dispatch(paymentaction(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature, cart.cart.cartItems))
            },
            "prefill": {
                "name": userName,
                "email": userEmail,
                "contact": register.customer.phoneNumber
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#008080"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <Layout>
            {
                orderpage ?
                    <div className="box-div">
                        <div className="o-d">
                            <div className="illustration-order-div">

                            </div>
                            <label className="lb-or">We just received your Order</label>
                            <label className="lbl-pay">Pay to Complete the Process.</label>
                        </div>
                        <div className="box11-div">
                            <label className="lb-name">Enter Your Name</label>
                            <input
                                className="order-input-div"
                                placeholder="Ex: name"
                                value={userName}
                                type="text"
                                onChange={e => setUserName(e.target.value)}
                            />
                            <label className="lb-name">Enter Your Email</label>
                            <input
                                className="order-input-div"
                                placeholder="Ex: something@gmail.com"
                                value={userEmail}
                                type="email"
                                onChange={e => setUseremail(e.target.value)}
                            />
                            <div className="pay-div">
                                <div onClick={codOrder} className="cash-on-div">
                                    Cash on Delivery
                                </div>
                                <div onClick={displayRazorpay} className="pay-now-div">
                                    Pay Now
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div className="box-div">
                        <div className="cart-page-title-div">
                            <label>My Cart</label>
                        </div>  
                        <div className="box1-div">
                            {
                                // Here in the code snippet we apply to condition 
                                products.products ?
                                    products.products.map(product => {
                                        if (cart.cart.cartItems) {
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
                            <div onClick={fetchOrder} className="order-now-div">
                                Order Now
                            </div>
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default CartPage