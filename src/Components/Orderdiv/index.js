import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

/**
* @author
* @function Orderdiv
**/

const Orderdiv = (props) => {

    const products = useSelector(state => state.products);

    console.log(products.products)

    // const expandDiv = () => {
    //     document.querySelector('.order_div_1').addEventListener('click', () => {
    //         document.querySelector('.order_div_1').classList.toggle('expand');
    //     })
    // }

    return (
        products.products.map(prod => {
            if(prod._id === props.data.product){
                return  <div className="order_details_div">
                    <label className="item_lbl">{prod.name}</label>
                    <label className="quantity_lbl">{props.data.quantity}{prod.unit = '' ? prod.qtyunit : prod.unit}</label>
                    <label className="price_lbl">&#x20B9;{props.data.price}</label>
                </div>
            }
        })
    )

}

export default Orderdiv