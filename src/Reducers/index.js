import { combineReducers } from 'redux';
import register_reducer from '../Reducers/Auth_Reducer/register_reducer';
import get_product_reducer from './Auth_Reducer/get_product_reducer';
import get_category_reducer from './Auth_Reducer/get_category_reducer';
import cart_reducer from './cart_reducer';

const rootReducer = combineReducers({
    register: register_reducer,
    products: get_product_reducer,
    categories: get_category_reducer,
    cart : cart_reducer
});

export default rootReducer;