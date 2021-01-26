import { initialdata_constants } from "../../Actions/Constants"

const initState = {
    categories: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case initialdata_constants.GET_ALL_DATA_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        default:
            break;
    }
    return state
}