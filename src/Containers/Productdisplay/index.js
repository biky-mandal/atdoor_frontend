import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../Components/Layout'
import MenuHeader from '../../Components/MenuHeader'
import Product_Card from '../../Components/ProductCard'

/**
* @author
* @function ProductDisplay
**/

const ProductDisplay = (props) => {
    const products = useSelector(state => state.products);

    return(
        <Layout>
            <MenuHeader/>
            <div className="cards">
                {/* {props.location.aboutProps} */}
                {
                    products.products ? 
                        products.products.map(product => {
                            // console.log(product._id)
                            if(product._id == props.location.aboutProps){
                                // console.log(product)
                                return <Product_Card
                                    key = {product._id}
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
                                />
                            }
                        })
                    :
                    null
                }
                </div>
        </Layout>
    )
}

export default ProductDisplay