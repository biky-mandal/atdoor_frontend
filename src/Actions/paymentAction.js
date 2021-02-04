import axios from '../Helpers/axios'
import { orderConstants } from './Constants';

export const paymentaction = (payment_id, order_id, signature, cartItems) => {
    return async dispatch => {
        await axios.post('/payment', {
            payment_id, order_id, signature, cartItems
        }).then(res => {
            console.log(res.data);
            dispatch({
                type: orderConstants.PAYMENT_SUCCESS,
            })
        }).catch(error => {
            console.log(error)
        })
    }
}