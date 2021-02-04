import { orderConstants } from "../Actions/Constants"

const initState = {
    orderDetails: [],
    fetched: false
}

export default (state = initState, action) => {
    switch (action.type){
        case orderConstants.ORDER_SUCCESS:
            state = {
                ...state,
                fetched: true,
                orderDetails: action.payload.orderDetails
            }
            break;
        default:
            break;
    }
    return state;
}