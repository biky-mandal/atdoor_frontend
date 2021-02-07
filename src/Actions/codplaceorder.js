import axios from '../Helpers/axios';
import {orderConstants} from './Constants';

export const codOrderAction = (amount, orderItems) => {
    return async dispatch => {
        await axios.post('/codorder', {
            amount, orderItems
        }).then(res => {
            console.log(res.data);
            dispatch({
                type: orderConstants.CODORDER_SUCCESS,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}