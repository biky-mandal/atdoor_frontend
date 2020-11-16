import React from 'react';
import './style.css';
import bg1 from '../../Resources/cat-vege.png';
/**
* @author
* @function Product_Card
**/

const Product_Card = (props) => {
    return (
        <div className="product-card">
            <div className="product-card-image-div">
                <img className="product-image" src={bg1} alt="i"/> 
            </div>
            <div className="product-card-details-div">
                <div className="product-title-div">
                    <label className="product-title">Product Title</label>
                </div>
                <div className="product-price">
                    <label></label>
                </div>
                <div className="product-amnt">

                </div>
            </div>
        </div>
    )

}

export default Product_Card