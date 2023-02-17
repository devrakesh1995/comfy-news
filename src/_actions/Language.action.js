import { userConstants } from '../_constants';

export const LanguageActions = {
    setlang
};




function setlang(data) {
    
    return dispatch => {
        dispatch(success(data));
        setTimeout(() => {
            props.navigation.navigate('Swiper');
        }, 1000);
    };
    function success(users) {
        return { type: userConstants.SET_LANG, users };
    }
}










