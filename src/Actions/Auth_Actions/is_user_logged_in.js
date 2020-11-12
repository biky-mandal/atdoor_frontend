import { authConstants } from "../Constants";

export const isUserLoggedIn = () => {
    return async dispatch => {
        // getting the tokn from local storage.
        const token = localStorage.getItem('token');

        if(token){
            const customer = JSON.parse(localStorage.getItem('customer'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, customer
                }
            });
        }
    }
}