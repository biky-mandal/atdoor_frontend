import axios from '../Helpers/axios';
import { cartConstants } from './Constants';


export const addToCart_Action = (cartItems) => {
    return async dispatch => {
        dispatch({
            type: cartConstants.ADD_TO_CART_REQUEST,
        })
        await axios.post('/user/cart/add', {
            cartItems
        }).then(res => {
            console.log(res.data)
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
            })
        }).catch(error => {
            dispatch({
                type: cartConstants.ADD_TO_CART_FAILURE,
            })
            alert('Please Login With Your Account First')
        });


        // if(res.status === 200){
        //     console.log(cart);
            // dispatch({
            //     type: cartConstants.ADD_TO_CART_SUCCESS,
            //     payload: {
            //         cart: cart
            //     }
            // })
        // }
    }
}