import { userConstants } from '../_constants';

export const fontActions = {
    setFont
};


function setFont(data) {

    return dispatch => {
        dispatch(success(data));
    };
    function success(users) {
        return { type: userConstants.SET_FONT, users };
    }
}










