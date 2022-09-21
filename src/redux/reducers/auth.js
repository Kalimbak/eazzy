import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/types'


export default function (state, action)  {
    const {type, payload} = action;
    switch(type){
        case SIGNUP_SUCCESS:
            return {
                ...state,
            }
            case SIGNUP_FAIL:
                return {
                    ...state,
                    user: {},
                }
    }
}