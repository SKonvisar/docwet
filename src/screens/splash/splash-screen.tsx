import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { ROUTES } from 'src/constants/routes';

interface ISplashScreenProps {
  // TODO: add navigation prop type
  navigation: any;
}

export function SplashScreen({ navigation }: ISplashScreenProps) {
  const token = useSelector((store: any) => store.user.token);

  React.useEffect(() => {
    const checkToken = async () => {
      const isUserExist = Boolean(token);
      const route = isUserExist ? ROUTES.APP : ROUTES.AUTH_STACK;
      navigation.navigate(route);
    };

    checkToken();
  }, [token]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
});
