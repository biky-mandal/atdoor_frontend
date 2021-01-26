import { searchConstants } from "./Constants"

export const search_action = (filter_Product) => {
    return dispatch => {
        dispatch({
            type: searchConstants.ADD_SEARCH_ARRAY,
            payload: {
                filter_Product
            }
        })
    }
}