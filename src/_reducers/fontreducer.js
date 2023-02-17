
import {
    userConstants
} from '../_constants';


const initialState = {
    font: "light",
    primary: 15,
    secondary: 18,
    thirdback:  10,
    back:12,
thor:20
}

export function font(state = initialState, action) {

    switch (action.type) {
        case userConstants.SET_FONT:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state
    }
}