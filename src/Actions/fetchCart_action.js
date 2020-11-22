import axios from '../Helpers/axios'
import { cartConstants } from './Constants';

export const fetch_cart_action = (currentUserId) => {
    return async dispatch => {
        await axios.post('/fetchcart', {
            currentUserId
        }).then(res => {
            const {cart} = res.data;
            dispatch({
                type: cartConstants.FETCH_CART_SUCCESS,
                payload: {
                    cart
                }
            })
        }).catch(error => {
            console.log(error.request)
        });
    }
}