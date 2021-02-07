import axios from '../Helpers/axios';

export const messageAction = (name, message) => {
    return async dispatch => {
        await axios.post('/message', {
            name, message
        }).then(res => {
            alert(res.data.message)
        }).catch(error => {
            console.log(error)
        })
    }
}