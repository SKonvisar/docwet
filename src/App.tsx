// Importing react-native-gesture-handler have to be the firs import in the root file
// for details see https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from './screens/splash';
import { AuthNavigation } from './screens/auth/';
import { HomeNavigator } from './screens/home-navigator';
import { RootProvider } from './services/redux/provider';
import { ROUTES } from './constants/routes';

const SwitchStack = createStackNavigator();

export function App() {
  return (
    <RootProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <SwitchStack.Navigator
            initialRouteName={ROUTES.CHECK_SCREEN}
            headerMode="none"
          >
            <SwitchStack.Screen name={ROUTES.CHECK_SCREEN} component={SplashScreen} />
            <SwitchStack.Screen name={ROUTES.AUTH_STACK} component={AuthNavigation} />
            <SwitchStack.Screen name={ROUTES.APP} component={HomeNavigator} />
          </SwitchStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </RootProvider>
  );
}
