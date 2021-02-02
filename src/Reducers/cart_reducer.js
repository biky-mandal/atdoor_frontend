import { cartConstants } from "../Actions/Constants";

const initState = {
    cart: [],
    added: false,
    fetching: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case cartConstants.FETCH_CART_REQUEST:
            state = {
                ...state,
                fetching: true
            }
            break;
        case cartConstants.FETCH_CART_SUCCESS:
            state = {
                ...state,
                cart: action.payload.cart,
                fetching: false,
                added: false
            }
            break;
        case cartConstants.FETCH_CART_FAILURE:
            state = {
                ...state,
                fetching: false
            }
            break;
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                added: false,
                fetching: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                added: true,
                fetching: false
            }
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                added: false,
                fetching: false
            }
            break;
        case cartConstants.DELETE_CART_SUCCESS:
            state = {
                ...state,
                added: true,
                fetching: false
            }
            break;
        case cartConstants.DELETE_CART_REQUEST:
            state = {
                ...state,
                added: false,
                fetching: true
            }
            break;
        case cartConstants.DELETE_CART_FAILURE:
            state = {
                ...state,
                added: false,
                fetching: false
            }
            break;
        default:
            break;
    }
    return state
}