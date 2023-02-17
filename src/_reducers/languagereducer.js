
import {
    userConstants
} from '../_constants';


const initialState = {
    leng: "",
   
}

export function language(state = initialState, action) {

    switch (action.type) {
        case userConstants.SET_LANG:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state
    }
}