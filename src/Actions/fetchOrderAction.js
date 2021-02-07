import axios from '../Helpers/axios'
import { orderConstants } from './Constants'

export const fetchOrderAction = () => {

    return async dispatch => {
        dispatch({
            type: orderConstants.FETCH_ORDER_REQUEST,
        })
        await axios.post('/fetchcodorders', {

        }).then(res => {
            const {allOrder} = res.data;
            console.log(allOrder);
            dispatch({
                type: orderConstants.FETCH_ORDER_SUCCESS,
                payload: {
                    allOrder: allOrder
                }
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: orderConstants.FETCH_ORDER_FAILURE,
            })
        })
    }
}


export const fetchOnlineOrderAction = () => {

    return async dispatch => {
        dispatch({
            type: orderConstants.FETCH_ORDER_REQUEST,
        })
        await axios.post('/fetchorders', {

        }).then(res => {
            const {allOrder} = res.data;
            console.log(allOrder);
            dispatch({
                type: orderConstants.FETCH_ORDER_SUCCESS,
                payload: {
                    allOrder: allOrder
                }
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: orderConstants.FETCH_ORDER_FAILURE,
            })
        })
    }
}