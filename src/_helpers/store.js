import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../_reducers';
import { persistStore, persistReducer } from 'redux-persist';


import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'users111',
    storage: AsyncStorage,
    whitelist: ['users11'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    pReducer,
    applyMiddleware(
        thunkMiddleware,

    )
);


const persistor = persistStore(store);

export { persistor, store };