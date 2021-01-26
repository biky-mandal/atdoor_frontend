import { authConstants } from "../../Actions/Constants";

const initState = {
    token: null,
    customer: {
        _id: '',
        phoneNumber: '',
        fullName:''
    },
    TEMP_INFO:{
        data:{
            
        }
    },
    authenticate: false,
    loading: false
}

export default (state = initState, action) => {
    switch(action.type){
        // For OTP actions

        case authConstants.GET_OTP_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;
        case authConstants.GET_OTP_SUCCESS:
            state = {
                ...state,
                TEMP_INFO: action.payload.data,
                loading: false
            }
        break;
        case authConstants.GET_OTP_FAILURE:
            state = {
                ...state,
                loading: false
            }
        break;

        case authConstants.VERIFY_OTP_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;
        case authConstants.VERIFY_OTP_SUCCESS:
            state = {
                ...state,
                TEMP_INFO: action.payload.data,
                loading: false
            }
        break;
        case authConstants.VERIFY_OTP_FAILURE:
            state = {
                ...state,
                loading: false
            }
        break;

        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                customer: action.payload.customer,
                authenticate: true,
                loading: false
            }
        break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                loading: false
            }
        break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...state,
                authenticate: false
            }
        break;
        default:
            break;
    }
    return state;
}