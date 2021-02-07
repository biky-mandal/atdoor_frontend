import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../Components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOnlineOrderAction, fetchOrderAction } from '../../Actions/fetchOrderAction';
import {FiChevronDown } from 'react-icons/fi';
import Orderdiv from '../../Components/Orderdiv';

/**
* @author
* @function Order_Page
**/

const Order_Page = (props) => {

    const dispatch = useDispatch();

    const [cod, SetCod] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails);
    const products = useSelector(state => state.products)
    console.log(orderDetails.allOrder)

    // const expandDiv = () => {
    //     document.querySelector('.order_div_1').addEventListener('click', () => {
    //         document.querySelector('.order_div_1').classList.toggle('expand');
    //     })
    // }

    useEffect(() => {
        // dispatch(fetchOrderAction());
        // dispatch(fetchOnlineOrderAction());
        if(cod){
            dispatch(fetchOrderAction());
        }else{
            dispatch(fetchOnlineOrderAction());
        }
    },[cod])

    const checkOnline = () => {
        SetCod(false)
    }

    const checkCOD = () => {
        SetCod(true)
    }

    return (
        <Layout>
            <div className="order_page_div">
                <label className="my_order_lbl">
                    My Order
                </label>
                {
                    cod ? <button className="togglebtn" onClick={checkOnline}>Paid Orders</button> : <button className="togglebtn" onClick={checkCOD}>COD Orders</button>
                }
                {
                    orderDetails.allOrder ? 
                        orderDetails.allOrder.map(order => {
                            return(
                                <div key={order._id} className="order_div_1">
                                    <div key={order._id} className="order_id_div">
                                        <label   className="order_id_">Order Id</label>
                                        <label   className="order_id_lbl">{order.order_id}</label>
                                        {/* <span  ><FiChevronDown/></span> */}
                                    </div>
                                    {
                                        order.orderItems.map(data => { 
                                            
                                            return <Orderdiv key={data.product} data = {data}/>
                                        })
                                    }
                                </div>
                            );
                        })
                    :
                    null
                }
            </div>
        </Layout>
    )

}

export default Order_Page