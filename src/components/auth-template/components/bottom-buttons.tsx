import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IBottomButtons {
  onButtonPress: (route: string) => void;
  buttons: string[];
}

const BUTTON_LABELS: { [key: string]: string } = {
  RESET_PASSWORD: "Can't login?",
  SIGN_IN: 'Sign in instead',
  SIGN_UP: "Don't have an account yet ?",
};

export const BottomButtons = ({ onButtonPress, buttons }: IBottomButtons) => {
  return (
    <View style={styles.navButtons}>
      {buttons.map((route: string, key: number) => {
        const onPress = () => onButtonPress(route);
        const label = BUTTON_LABELS[route];
        return (
          <TouchableOpacity onPress={onPress} key={key}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navButtons: {
    backgroundColor: 'lightcoral',
    alignItems: 'stretch',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
