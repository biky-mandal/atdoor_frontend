import { cartConstants } from "../Actions/Constants";

const initState = {
    cart: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case cartConstants.FETCH_CART_SUCCESS:
            state = {
                ...state,
                cart: action.payload.cart
            }
            break;
        default:
            break;
    }
    return state
}