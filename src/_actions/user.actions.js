
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './alert.actions';

export const userActions = {

  getAllNews,
  getMainNewsList,
  getMadhuriyaNewsList,
  getCurrentNews,
  getSportNewsList,
  getInternationalNewsList,
  getVideoList,
  getNewsById,
  getTopNewsList,
  getNationalNewsList,
  getCrimeNewsList,
  getBollywoodNewsList,
  getDBorijnalNewsList,
  getBudget2023NewsList,
  getWomenNewsList,
  getMagazineNewsList,
  getFekNewsList,
  getTakeautoNewsList,
  getRashifalNewsList,
  register, logout,
  otpSumbit, Login, otpSumbitLogin, userlogin, loginUser

};


function getMainNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getMainNewsList().then(
      users => {

        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_MAIN_NEWS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_MAIN_NEWS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_MAIN_NEWS_FAILURE, error };
  }
}







function logout() {
  return dispatch => {
    dispatch(request({}));
  };
  function request(user) {
    return { type: userConstants.LOGOUT_OTP_SUCCESS };
  }
}
function loginUser(data) {
  return dispatch => {
    dispatch(request({ data }));
    userService.loginUser(data).then(
      user => {
        // // console.log('userlogin: -----> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', user)
        dispatch(success(user));
        dispatch(alertActions.success("You Are Register Succecfully"));

      },
      error => {
        dispatch(failure(error));
        console.log(error);
        dispatch(alertActions.error(error));
      },
    );
  };

  function request(user) {
    return { type: userConstants.LOGINN_USER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGINN_USER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGINN_USER_FAILURE, error };
  }
}
function userlogin(data) {
  return dispatch => {
    dispatch(request({ data }));
    userService.userlogin(data).then(
      user => {
        // // console.log('userlogin: -----> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', user)
        dispatch(success(user));
        // dispatch(alertActions.success("You Are Register Succecfully"));

      },
      error => {
        dispatch(failure(error));
        // //// console.log(error);
        dispatch(alertActions.error(error));
      },
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
function Login(data, props) {
  return dispatch => {
    dispatch(request({ data }));
    userService.Login(data).then(
      users => {
        let message =
          users && users.userinfoToken && users.userinfoToken.message
            ? users.userinfoToken.message
            : '';
        console.log(users);
        dispatch(success(users));
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&77", users);
        dispatch(alertActions.success(message));
        // //// console.log('userlogin: -----> ', user)
        // setTimeout(() => {
        //   props.navigation.navigate('Login');
        // }, 1000);
      },
      error => {
        dispatch(failure(error));
        // //// console.log(error);
        dispatch(alertActions.error(error));
      },
    );
  };

  function request(users) {
    return { type: userConstants.LOGIN_REQUEST, users };
  }
  function success(users) {
    return { type: userConstants.LOGIN_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}


function otpSumbitLogin(data, props) {
  return dispatch => {
    dispatch(request({ data }));
    userService.otpSumbitLogin(data).then(
      users => {
        dispatch(success(users));
        // console.log("useruseruser ssssssssssssssssssss ",user);
        dispatch(alertActions.success("You Are Verified Succesfully"));
        setTimeout(() => {
          props.navigation.navigate('Home');
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }, 1000);
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };

  function request(user) {
    return { type: userConstants.OTPP_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.OTPP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.OTPP_FAILURE, error };
  }
}
function otpSumbit(data, props) {
  return dispatch => {
    dispatch(request({ data }));
    userService.otpSumbit(data).then(
      users => {
        dispatch(success(users));
        // console.log("useruseruser ssssssssssssssssssss ",user);
        dispatch(alertActions.success("You Are Varifyed Succesfully"));
        setTimeout(() => {
          props.navigation.navigate('Home');
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }, 1000);
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };

  function request(user) {
    return { type: userConstants.OTP_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.OTP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.OTP_FAILURE, error };
  }
}

function register(data, props) {
  return dispatch => {
    dispatch(request({ data }));
    userService.register(data).then(
      users => {
        let message =
          users && users.userinfoToken && users.userinfoToken.message
            ? users.userinfoToken.message
            : '';
        console.log(users);
        dispatch(success(users));
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&77", users);
        dispatch(alertActions.success(message));
        // //// console.log('userlogin: -----> ', user)
        // setTimeout(() => {
        //   props.navigation.navigate('Login');
        // }, 1000);
      },
      error => {
        dispatch(failure(error));
        // //// console.log(error);
        dispatch(alertActions.error(error));
      },
    );
  };

  function request(users) {
    return { type: userConstants.REGISTER_REQUEST, users };
  }
  function success(users) {
    return { type: userConstants.REGISTER_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getNationalNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getNationalNewsList().then(
      users => {

        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_NATIONAL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_NATIONAL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_NATIONAL_FAILURE, error };
  }
}

function getAllNews() {
  return dispatch => {
    dispatch(request());
    userService.getAllNews().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_ALL_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_ALL_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_NEWS_LIST_FAILURE, error };
  }
}

function getCurrentNews() {
  return dispatch => {
    dispatch(request());
    userService.getCurrentNews().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_CURRENT_NEWS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_CURRENT_NEWS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_CURRENT_NEWS_FAILURE, error };
  }
}

function getCrimeNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getCrimeNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_CRIME_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_CRIME_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_CRIME_NEWS_LIST_FAILURE, error };
  }
}

function getBollywoodNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getBollywoodNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_BOLLYWOOD_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_BOLLYWOOD_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_BOLLYWOOD_NEWS_LIST_FAILURE, error };
  }
}


function getDBorijnalNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getDBorijnalNewsList().then(
      users => {
        console.log("getDBorijnalNewsListgetDBorijnalNewsList",users.getDBorijnalNewsList);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_DBORIJNAL_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_DBORIJNAL_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_DBORIJNAL_NEWS_LIST_FAILURE, error };
  }
}



function getBudget2023NewsList() {
  return dispatch => {
    dispatch(request());
    userService.getBudget2023NewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_BUDGET2023_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_BUDGET2023_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_BUDGET2023_NEWS_LIST_FAILURE, error };
  }
}

function getWomenNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getWomenNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_WOMEN_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_WOMEN_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_WOMEN_NEWS_LIST_FAILURE, error };
  }
}


function getMagazineNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getMagazineNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_MAGAZINE_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_MAGAZINE_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_MAGAZINE_NEWS_LIST_FAILURE, error };
  }
}

function getFekNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getFekNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_FEK_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_FEK_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_FEK_NEWS_LIST_FAILURE, error };
  }
}

function getMadhuriyaNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getMadhuriyaNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_MADHURIYA_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_MADHURIYA_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_MADHURIYA_NEWS_LIST_FAILURE, error };
  }
}

function getTakeautoNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getTakeautoNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_TAKEAUTO_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_TAKEAUTO_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_TAKEAUTO_NEWS_LIST_FAILURE, error };
  }
}

function getRashifalNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getRashifalNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_RASHIFAL_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_RASHIFAL_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_RASHIFAL_NEWS_LIST_FAILURE, error };
  }
}


function getSportNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getSportNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users.getSportNewsListData);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_SPORT_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_SPORT_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_SPORT_NEWS_LIST_FAILURE, error };
  }
}

function getInternationalNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getInternationalNewsList().then(
      users => {
        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77",users);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_INTERNATIONAL_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_INTERNATIONAL_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_INTERNATIONAL_NEWS_LIST_FAILURE, error };
  }
}

function getVideoList() {
  return dispatch => {
    dispatch(request());
    userService.getVideoList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_VIDEO_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_VIDEO_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_VIDEO_LIST_FAILURE, error };
  }
}

function getNewsById(id) {
  return dispatch => {
    dispatch(request());
    userService.getNewsById(id).then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_NEWS_BY_ID_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_NEWS_BY_ID_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_NEWS_BY_ID_FAILURE, error };
  }
}

function getTopNewsList() {
  return dispatch => {
    dispatch(request());
    userService.getTopNewsList().then(
      users => {
        // console.log("%%%%%%%%%%%%%%%%%%%%%",users);
        dispatch(success(users));

      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_TOP_NEWS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_TOP_NEWS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_TOP_NEWS_FAILURE, error };
  }
}
