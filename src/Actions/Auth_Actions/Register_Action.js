import axios from '../../Helpers/axios';
import { authConstants } from '../Constants';

export const getOTP_Action = (phoneNumber) => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.GET_OTP_REQUEST
        });
        await axios.post('/user/verification/pending', {
            phoneNumber
        }).then(res => {
            console.log(res);
            dispatch({
                type: authConstants.GET_OTP_SUCCESS,
                payload: {
                    data: res.data
                }
            });
        }).catch(error => {
            console.log(error)
            dispatch({
                type: authConstants.GET_OTP_FAILURE
            });
            console.log(error.request);
        })
    }
}

export const verifyOTP_Action = (phoneNumber, code) => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.VERIFY_OTP_REQUEST
        });
        await axios.post('/user/verify', {
            phoneNumber, code
        }).then(res => {
            dispatch({
                type: authConstants.VERIFY_OTP_SUCCESS,
                payload: {
                    data : res.data
                }
            });
        }).catch(error => {
            dispatch({
                type: authConstants.VERIFY_OTP_FAILURE
            });
            console.log(error)
        })
    }
}

export const register_action = (phoneNumber, password) => {
    return async (dispatch) => {

        dispatch({
            type: authConstants.LOGIN_REQUEST
        });
        await axios.post('/user/signup', {
            phoneNumber, password
        }).then(res => {
            // After registration we perform login
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

            console.log(errors)
            dispatch({
                type: authConstants.LOGIN_FAILURE
            });
            alert('Please Check. Something Went Wrong.');
        })
    }
}