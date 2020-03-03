import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../home/home';
import { ROUTES } from '../../constants/routes';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name={ROUTES.HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
