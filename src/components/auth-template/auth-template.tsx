import * as React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthForm } from './components/form';
import { BottomButtons } from './components/bottom-buttons';

import { useAuthTemplateHandlers } from './auth-template.state';
import { BOTTOM_NAV_BUTTONS } from 'src/services/auth/constants';

//TODO: Define props types
export const AuthScreenTemplate = (props: any) => {
  const { onSubmit, navigateTo, currentScreen } = useAuthTemplateHandlers(
    props
  );

  return (
    <SafeAreaView style={styles.f1}>
      <KeyboardAvoidingView
        style={styles.f1}
        contentContainerStyle={styles.container}
        behavior="padding"
      >
        <AuthForm onSubmit={onSubmit} screen={currentScreen} />
        <BottomButtons
          onButtonPress={navigateTo}
          buttons={BOTTOM_NAV_BUTTONS[currentScreen]}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  f1: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});
