import { createReducer } from '../redux/utils';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { types, initialState } from './constants';
import { IUserStore } from './types';

const persistConfig = {
  key: 'token',
  whitelist: ['token'],
  storage: AsyncStorage,
};

const { SET_USER, LOG_OUT } = types;
const USER_HANDLERS = {
  [SET_USER]: (state: IUserStore, { payload }: any) => {
    return {
      ...state,
      ...payload,
    };
  },
  [LOG_OUT]: () => {
    return initialState;
  },
};

const userReducer = createReducer<IUserStore>(initialState, USER_HANDLERS);
export const persistUserReducer = persistReducer(persistConfig, userReducer);
