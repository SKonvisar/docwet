import * as React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Form } from './form';

export const Login = () => {
  return (
    <SafeAreaView style={styles.f1}>
      <KeyboardAvoidingView
        style={styles.f1}
        contentContainerStyle={styles.container}
        behavior="padding"
      >
        <Form />

        <View style={styles.navButtons}>
          <Text>There will be buttons here</Text>
        </View>
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
  navButtons: {
    backgroundColor: 'green',
  },
});
