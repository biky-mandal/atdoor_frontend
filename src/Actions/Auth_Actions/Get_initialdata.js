import axios from '../../Helpers/axios';
import { initialdata_constants } from '../Constants';

export const Get_initialdata = () => {
    return async dispatch => {
        const res = await axios.post('/initialdata');

        const {products, categories} = res.data;

        if(res.status === 200){
            dispatch({
                type: initialdata_constants.GET_ALL_DATA_SUCCESS,
                payload:{
                    categories, products
                }
            });
        }
    }
    
}