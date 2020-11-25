import axios from '../Helpers/axios';
import { cartConstants } from './Constants';


export const Delete_cart_action = (cartItems) => {
    return async dispatch => {
        await axios.post('/user/cart/delete', {
            cartItems
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error.request)
        });
    }
}
