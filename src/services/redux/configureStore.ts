import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import { rootReducer } from './reducer';

export function configureStore() {
  let store = createStore(rootReducer);
  let persistor = persistStore(store);
  return { store, persistor };
}
