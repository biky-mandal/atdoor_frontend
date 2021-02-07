import { orderConstants } from "../Actions/Constants"

const initState = {
    orderDetails: [],
    fetched: false,
    allOrder:[],

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
        case orderConstants.CODORDER_SUCCESS:
            state = {
                ...state,
                fetched: true
            }
            break;
        case orderConstants.FETCH_ORDER_SUCCESS:
            state = {
                ...state,
                allOrder: action.payload.allOrder
            }
            break;
        default:
            break;
    }
    return state;
}