import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreenTemplate } from '../../components/auth-template/auth-template';
import { ROUTES } from 'src/constants/routes';

const AuthStack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={ROUTES.SIGN_IN} component={AuthScreenTemplate} />
      <AuthStack.Screen name={ROUTES.SIGN_UP} component={AuthScreenTemplate} />
      <AuthStack.Screen name={ROUTES.RESET_PASSWORD} component={AuthScreenTemplate} />
    </AuthStack.Navigator>
  );
};
