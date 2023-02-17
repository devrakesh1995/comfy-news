




import {
    userConstants
} from '../_constants';


const initialState = {
    theme: "light",
    primary: "#eff6ff",
    secondary: "#f5f5f5",
    thirdback: "black",
    Lightthought: 'gray',
    Power: '#fff'

}

export function theme(state = initialState, action) {

    switch (action.type) {
        case userConstants.SET_THEME:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state
    }
}