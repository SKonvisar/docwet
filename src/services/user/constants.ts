import { IUserStore } from './types';

export const types = {
  SET_USER: 'SET_USER',
  LOG_OUT: 'LOG_OUT',
};

export const initialState: IUserStore = {
  firstName: '',
  lastName: '',
  token: null,
};
