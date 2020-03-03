import { combineReducers } from 'redux';
import { persistUserReducer } from '../user/reducer';

export const rootReducer = combineReducers({
  user: persistUserReducer,
});
