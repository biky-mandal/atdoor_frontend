import axios from '../../Helpers/axios';
import { authConstants } from '../Constants';

export const login_Action = (phoneNumber, password) => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        });
        await axios.post('/user/login', {
            phoneNumber, password
        }).then(res => {
            console.log(res.data);
            const { token, customer } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('customer', JSON.stringify(customer));

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, customer
                }
            });
        }).catch(error => {
            const errors = JSON.parse(error.request.response)
            dispatch({
                type: authConstants.LOGIN_FAILURE
            });
            alert(errors.error);
        })
    }
}