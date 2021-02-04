import axios from '../Helpers/axios'
import { orderConstants } from './Constants';

export const placeOrderAction = (amount, orderItems) => {
    return async dispatch => {
        await axios.post('/order', {
            amount, orderItems
        }).then(res => {
            console.log(res.data.order);
            dispatch({
                type: orderConstants.ORDER_SUCCESS,
                payload:{
                    orderDetails: res.data.order
                }
            })
        }).catch(error => {
            console.log(error)
        })
    }
}