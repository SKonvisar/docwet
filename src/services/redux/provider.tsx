import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './configureStore';
import { View, ActivityIndicator } from 'react-native';

export const { store, persistor } = configureStore();

interface IRootProviderProps {
  children: React.ReactElement;
}

export const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
