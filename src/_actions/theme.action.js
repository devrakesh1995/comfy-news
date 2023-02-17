import { userConstants } from '../_constants';

export const themeActions = {
    setTheme
};




function setTheme(data) {
    
    return dispatch => {
        dispatch(success(data));
    };
    function success(users) {
        return { type: userConstants.SET_THEME, users };
    }
}










