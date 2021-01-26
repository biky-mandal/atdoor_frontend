import { searchConstants } from "../Actions/Constants";

const initState = {
    searchedProducts: []
};

export default (state = initState, action) => {
    switch (action.type){
        case searchConstants.ADD_SEARCH_ARRAY:
            state = {
                ...state,
                searchedProducts: action.payload.filter_Product
            }
        break;
        default: 
            break;
    }
    return state;
}