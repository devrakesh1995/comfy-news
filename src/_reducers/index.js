import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { theme } from './theamreducer';
import { font } from './fontreducer';
import {language} from './languagereducer'

import { alert } from './alert.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme','font','language,'],
};




const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  theme:persistReducer(persistConfig, theme),
  font:persistReducer(persistConfig, font),
  language:persistReducer(persistConfig, language),

});

export default rootReducer;
