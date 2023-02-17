import { CONST } from '../_config';
import { authHeader } from '../_helpers';
import axios from 'axios';

import { store } from '../_helpers/store';


export const userService = {

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
  register, otpSumbit, Login, otpSumbitLogin, userlogin, loginUser

};
function logout() {

}



function getMainNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getMainNewsList`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getMainNewsList: data.data.data.mainNewsSection
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}


function getRashifalNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=Horoscope&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList Rashi:::::::::::', data.data.data.list);
      let bucketObj = {
        getRashifalNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}



function getTakeautoNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=Tech%20Auto&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNews::::::::::', data.data.data.list);
      let bucketObj = {
        getTakeautoNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}




function getMadhuriyaNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=Madhurima&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsL madhuruma:::', data.data.data.list);
      let bucketObj = {
        getMudhiyaNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}


function getFekNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=fake%20news&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList:::::::::Fake', data.data.data.list);
      let bucketObj = {
        getFekNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}

function getMagazineNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=magazine&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNews ma:::::::::::', data.data.data.list);
      let bucketObj = {
        getMagazineNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}



function getWomenNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=Woman&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getWomenNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}


function getBudget2023NewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=%E0%A4%AC%E0%A5%89%E0%A4%B2%E0%A5%80%E0%A4%B5%E0%A5%81%E0%A4%A1&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getBudget2023NewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}



function getDBorijnalNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=DB%20Original&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getDBorijnalNewsList: data.data.data.list

      }
      // console.log("getNationalNewsListgetNationalNewsList::::((((", bucketObj.getDBorijnalNewsList);
      return bucketObj;
    });
}



function getBollywoodNewsList(data) {
  // console.log('getNationalNewsList  getNationalNewsList',);
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=Bollywood&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getBollywoodList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}


function loginUser(data) {

  const options = {
    url: CONST.BACKEND_URL + `/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(user => {

      let userObj = {

        userinfoToken: user.data.data
      }
      // console.log("ssssssssssssssssssss#######################!", user.data.data);
      return userObj;
    });
}
function userlogin(data) {

  const options = {
    url: CONST.BACKEND_URL + `/register`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(user => {

      let userObj = {

        userinfoToken: user.data.data
      }
      return userObj;
    });
}

function Login(data) {
  // console.log(data);
  let { users } = store.getState()
  const options = {
    url: `https://www.comfynews.site/api/v1/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    data: JSON.stringify(data)
  };

  return axios(options)
    .then(data => {
      // console.log("logindfsadfd ", data.data.data);
      let userObj = {
        userinfoToken: data.data.data

      }
      return userObj;
    });
}

function otpSumbitLogin(data) {

  const options = {
    url: CONST.BACKEND_URL + `/loginValidateOtp`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // // console.log("userinfoSend @@@@@@@@@@!!!!!!!!!!!!!!!!!!!", data.data);
      let bucketObj = {
        userinfo: data.data.data
      }
      return bucketObj;
    });
}

function otpSumbit(data) {

  const options = {
    url: CONST.BACKEND_URL + `/registerValidateOtp`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // // console.log("userinfoSend @@@@@@@@@@!!!!!!!!!!!!!!!!!!!", data.data);
      let bucketObj = {
        userinfo: data.data.data
      }
      return bucketObj;
    });
}

function register(data) {

  let { users } = store.getState()
  const options = {
    url: `https://www.comfynews.site/api/v1/register`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    data: JSON.stringify(data)
  };

  return axios(options)
    .then(data => {
      // console.log("register ", data.data.data);
      let userObj = {
        userinfoToken: data.data.data
      }
      return userObj;
    });
}


function getCrimeNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=CRIME&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getCrimeNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}
function getNationalNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=NATIONAL&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getNationalNewsList  getNationalNewsList', data.data.data.list);
      let bucketObj = {
        getNationalNewsList: data.data.data.list
      }
      // console.log("getNationalNewsListgetNationalNewsList:::", bucketObj);
      return bucketObj;
    });
}


function getAllNews(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getParentCategory`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getAllNewsgetAllNewsgetAllNews  datadatadata', data.data.data);
      let bucketObj = {
        getAllNewsData: data.data.data
      }
      // console.log("I AM IN getAllNews service:::", bucketObj);
      return bucketObj;
    });
}


function getCurrentNews() {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=INTERNATIONAL&subcategory=GEN&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getAllNewsgetAllNewsgetAllNews  datadatadata', data.data.data);
      let bucketObj = {
        getCurrentNews: data.data.data.list
      }
      // console.log("I AM IN getAllNews service:::", getCurrentNews);
      return bucketObj;
    });
}


function getSportNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: `https://www.comfynews.site/api/v1/getAllSubCategories?category=SPORTS&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getAllNewsgetAllNewsgetAllNews  datadatadata', data.data.data);
      let bucketObj = {
        getSportNewsListData: data.data.data.list
      }
      // console.log("I AM IN getAllNews service:::", bucketObj);
      return bucketObj;
    });
}

function getInternationalNewsList(data) {
  // let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAllSubCategories?category=INTERNATIONAL&subcategory=&pageNo=1&size=12`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },

  };
  return axios(options)
    .then(data => {
      // console.log("I AM IN getAllNews :##############::", data.data.data.list);

      let bucketObj = {
        getInternationalNewsList_Data: data.data.data.list

      }
      // console.log("I AM IN getAllNews service:::!!!!!!!!!!!!!!!!!!!!!!", bucketObj);
      return bucketObj;
    });
}

function getVideoList() {

  const options = {
    url:CONST.BACKEND_URL+ `/getVideoList?type=VIDEO&keyWord=&pageNo=1&size=25`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },

  };
  return axios(options)
    .then(data => {
      // console.log('vedio sssssssssss', data.data.data.list);
      let bucketObj = {
        getVideoListt: data.data.data.list
      }
      // console.log("I AM IN Videoooooooooooooooooo List:::", bucketObj);
      return bucketObj;
    });
}

function getNewsById(id) {

  const options = {
    url: `https://www.comfynews.site/api/v1/getNewsById?id=${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },

  };
  return axios(options)
    .then(data => {
      // console.log('*************** All news detail *******************', data.data.data);
      let bucketObj = {
        getNewsByIdData: data.data.data
      }
      // console.log("I AM IN allooooooooooooooooo List:::", getVideoList);
      return bucketObj;
    });
}

function getTopNewsList() {

  const options = {
    url: `https://www.comfynews.site/api/v1/getFeaturePostNewsList`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },

  };
  return axios(options)
    .then(data => {
      // console.log('getTopNewsListgetTopNewsListgetTopNewsListgetTopNewsListgetTopNewsList', data.data.data.featurePost
      // );
      let bucketObj = {
        getTopnewsdata: data.data.data.featurePost
      }
      // console.log("I AM IN Videoooooooooooooooooo List:::", getVideoList);
      return bucketObj;
    });
}