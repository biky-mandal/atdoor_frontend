import { initialdata_constants } from "../../Actions/Constants"

const initState = {
    products: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case initialdata_constants.GET_ALL_DATA_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        default:
            break;
    }
    return state
}