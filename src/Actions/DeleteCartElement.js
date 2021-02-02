import axios from '../Helpers/axios';
import { cartConstants } from './Constants';


export const Delete_cart_action = (cartItems) => {
    return async dispatch => {

        dispatch({
            type: cartConstants.DELETE_CART_REQUEST
        })

        await axios.post('/user/cart/delete', {
            cartItems
        }).then(res => {
            console.log(res.data)
            dispatch({
                type: cartConstants.DELETE_CART_SUCCESS
            })
        }).catch(error => {
            dispatch({
                type: cartConstants.DELETE_CART_FAILURE
            })
            console.log(error.request)
        });
    }
}
