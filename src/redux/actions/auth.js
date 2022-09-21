import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/types'

const initialState = {
    user: {},
}

export const signup = (email, name, password) => async (dispatch) => {
    const body = JSON.stringify( {email, name, password});
    try {
        axios.post(`http://localhost:4000/user/signup`, body).then((res) => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        })
    })
    } catch(err) {
        dispatch({
            type: SIGNUP_FAIL,
        })
    }
}