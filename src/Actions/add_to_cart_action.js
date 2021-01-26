import axios from '../Helpers/axios';
// import { cartConstants } from './Constants';


export const addToCart_Action = (cartItems) => {
    return async dispatch => {
        await axios.post('/user/cart/add', {
            cartItems
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error.request)
        });


        // if(res.status === 200){
        //     console.log(cart);
        //     dispatch({
        //         type: cartConstants.ADD_TO_CART_SUCCESS,
        //         payload: {
        //             cart: cart
        //         }
        //     })
        // }
    }
}