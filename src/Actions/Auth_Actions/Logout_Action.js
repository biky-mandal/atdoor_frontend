import axios from '../../Helpers/axios';
import { authConstants } from '../Constants';

export const Logout_Action = () => {
    return async dispatch => {
        dispatch({
            type: authConstants.LOGOUT_REQUEST
        })

        // Performing connection to backend with axios.
        const res = await axios.post('/user/logout');

        if (res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            });
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
            });
            alert(res.data.error);
        }
    }
}