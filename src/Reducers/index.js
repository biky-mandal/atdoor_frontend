import { combineReducers } from 'redux';
import register_reducer from '../Reducers/Auth_Reducer/register_reducer';

const rootReducer = combineReducers({
    register: register_reducer
});

export default rootReducer;