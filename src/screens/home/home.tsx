import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { actions } from '../../services/user/actions';
import { ROUTES } from '../../constants/routes';

interface IHomeScreenProps {
  // TODO: Find out navigation props;
  navigation: any;
}
export const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  const dispatch = useDispatch();

  const mockLogout = () => {
    dispatch(actions.logout());
    navigation.navigate(ROUTES.AUTH_STACK);
  };

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="Mock Log out" onPress={mockLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
