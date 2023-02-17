import { userConstants } from '../_constants';

export function users(state = {}, action) {

  switch (action.type) {
    case userConstants.OTPP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.OTPP_SUCCESS:
      return {
        ...state,
        otpSuccess: false,
        // showLogin: true,
        UserVarifyed: true,
        UserLoginOTPFailure: false,
        // UserCurrentStage: action.user.userinfo.currentStage,
        token: action.user.userinfo.token
      };
    case userConstants.OTPP_FAILURE:
      return {
        ...state,
        error: action.error,
        UserLoginOTPFailure: true
      };

    case userConstants.OTP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.OTP_SUCCESS:
      return {
        ...state,
        // UserLoginSuccess: true,
        UserVarifyed: true,
        UserLoginOTPFailure: false,
        // UserCurrentStage: action.user.userinfo.currentStage,
        token: action.user.userinfo.token
      };
    case userConstants.OTP_FAILURE:
      return {
        ...state,
        error: action.error,
        UserLoginOTPFailure: true
      };
    // case userConstants.LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case userConstants.LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     otpSuccess: true,
    //     UserLoginEmailSuccess: true,
    //     UserLoginSuccess: false,
    //     UserLoginFailure: false,
    //     UserEmailToken: action.users.userinfoToken.token


    //   };

    // case userConstants.LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error
    //   };
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        UserLoginEmailSuccess: true,
        UserLoginSuccess: false,
        UserLoginFailure: false,
        UserEmailToken: action.users.userinfoToken.token


      };

    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.GET_NATIONAL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_NATIONAL_SUCCESS:
      return {
        ...state,

        loading: false,
        getNationalNewsList: action.users.getNationalNewsList,


      };

    case userConstants.GET_NATIONAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.LOGINN_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.LOGINN_USER_SUCCESS:
      return {
        ...state,
        UserLoginEmail: true,
        UserLoginSuccess: false,
        UserLoginFailure: false,
        UserToken: action.user.userinfoToken.token

      };
    case userConstants.LOGINN_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        UserLoginFailure: true


      };


    case userConstants.GET_SPORT_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_SPORT_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getSportNewsListData: action.users.getSportNewsListData,

      };

    case userConstants.GET_SPORT_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.GET_CURRENT_NEWS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_CURRENT_NEWS_SUCCESS:
      return {
        ...state,


        loading: false,
        getCurrentNewss: action.users.getCurrentNews,


      };

    case userConstants.GET_CURRENT_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.GET_SPORT_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_SPORT_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllNews: action.users.getAllNewsData,

      };

    case userConstants.GET_SPORT_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.GET_BOLLYWOOD_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_BOLLYWOOD_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getBollywoodNewsListdata: action.users.getBollywoodList,

      };

    case userConstants.GET_BOLLYWOOD_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };





      
    case userConstants.GET_MAIN_NEWS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_MAIN_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        getMainNewsList: action.users.getMainNewsList,

      };
      case userConstants.GET_MAIN_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_DBORIJNAL_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_DBORIJNAL_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getDBorijnalNewsListdata: action.users.getDBorijnalNewsList,

      };

    case userConstants.GET_DBORIJNAL_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    
    case userConstants.GET_BUDGET2023_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_BUDGET2023_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getBudget2023NewsList: action.users.getBudget2023NewsList,

      };
      case userConstants.GET_BUDGET2023_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.GET_WOMEN_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_WOMEN_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getWomenNewsList: action.users.getWomenNewsList,

      };
      case userConstants.GET_WOMEN_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_MAGAZINE_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_MAGAZINE_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getMagazineNewsList: action.users.getMagazineNewsList,

      };
      case userConstants.GET_MAGAZINE_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

      case userConstants.GET_FEK_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_FEK_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getFekNewsList: action.users.getFekNewsList,

      };
      case userConstants.GET_FEK_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

      case userConstants.GET_MADHURIYA_NEWS_LIST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case userConstants.GET_MADHURIYA_NEWS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          getMudhiyaNewsList: action.users.getMudhiyaNewsList,
  
        };
        case userConstants.GET_MADHURIYA_NEWS_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };

        case userConstants.GET_TAKEAUTO_NEWS_LIST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case userConstants.GET_TAKEAUTO_NEWS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          getTakeautoNewsList: action.users.getTakeautoNewsList,
  
        };
        case userConstants.GET_TAKEAUTO_NEWS_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };

        case userConstants.GET_RASHIFAL_NEWS_LIST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case userConstants.GET_RASHIFAL_NEWS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          getRashifalNewsList: action.users.getRashifalNewsList,
  
        };
        case userConstants.GET_RASHIFAL_NEWS_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };

    case userConstants.GET_CRIME_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_CRIME_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getCrimeNewsListdata: action.users.getCrimeNewsList,

      };

    case userConstants.GET_CRIME_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_INTERNATIONAL_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_INTERNATIONAL_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        getInternationalNewsList_Data: action.users.getInternationalNewsList_Data,

      };

    case userConstants.GET_INTERNATIONAL_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.GET_VIDEO_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_VIDEO_LIST_SUCCESS:
      return {
        ...state,


        loading: false,
        getVideoListt: action.users.getVideoListt,


      };

    case userConstants.GET_VIDEO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.GET_TOP_NEWS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_TOP_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        getTopnewsdata: action.users.getTopnewsdata,
      };
    case userConstants.GET_TOP_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_NEWS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_NEWS_BY_ID_SUCCESS:
      return {
        ...state,


        loading: false,
        getNewsByIdData: action.users.getNewsByIdData,


      };

    case userConstants.GET_NEWS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        UserLoginEmailSuccess: true,
        UserLoginSuccess: false,
        UserLoginFailure: false,
        UserEmailToken: action.user.userinfoToken.token

      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        UserLoginFailure: true


      };

    case userConstants.LOGOUT_OTP_SUCCESS:
      return {
        ...state,
        UserLoginSuccess: false,
        UserLoginEmailSuccess: false,
        UserLoginEmail: false,
        UserLoginOTPFailure: false,
        UserCurrentStage: null,
        token: null
      };
    default:
      return state
  }
}